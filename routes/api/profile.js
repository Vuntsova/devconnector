const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

// @router  GET api/profile/me
// @desc    Get current user's profile
// @access  Private

router.get('/me', Auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);
    if (!profile) {
      return res.status(400).send('No Profile');
    }
    res.send(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Eror');
  }
});

// @router  Post api/profile
// @desc    Create or update an user Profile
// @access  Private
router.post(
  '/',
  [
    Auth,
    [
      check('status', 'Status is Required')
        .not()
        .isEmpty(),
      check('skills', 'Adding skills is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      company,
      website,
      location,
      bio,
      status,
      skills,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram
    } = req.body;

    const profileFields = {};

    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (skills)
      profileFields.skills = skills.split(',').map(skill => skill.trim());

    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (facebook) profileFields.social.facebook = facebook;
    if (linkedin) profileFields.social.facebook = linkedin;
    if (instagram) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      // Update Profile
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        // await profile.save();
        return res.json(profile);
      }
      //Create profile
      if (!profile) {
        profile = new Profile(profileFields);

        await profile.save();
        res.send(profile);
      }
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error!');
    }
  }
);

// @router  GET api/profile
// @desc    Get all users profiles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name', 'avatar']);
    res.json(profiles);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Error Server');
  }
});

// @router  GET api/profile/user/:user_id
// @desc    Get an user's profile by user ID
// @access  Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).send('Profile not found');
    }
    res.json(profile);
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).send('Profile not found');
    }
    res.status(500).send('Error Server');
  }
});

// @router  DELETE api/profile/delete/
// @desc    DELETE an user's profile and post
// @access  Private

router.delete('/', Auth, async (req, res) => {
  try {
    // let profile = await Profile.findOne({ user: req.user.id });
    //   @todo - remove users posts
    //Remove profile
    await Profile.findOneAndRemove({
      user: req.user.id
    });
    //Remove a user
    await User.findOneAndRemove({
      _id: req.user.id
    });
    res.json({ msg: 'User Deleted' });
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error!');
  }
});

// @router  POST api/profile/experience
// @desc    POST an user's experience
// @access  Private
router.post(
  '/experience',
  [
    Auth,
    [
      check('title', 'title is Required')
        .not()
        .isEmpty(),
      check('company', 'company name is required')
        .not()
        .isEmpty(),
      check('from', 'from is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let profile = await Profile.findOne({ user: req.user.id });

      const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
      } = req.body;

      const newExperience = {
        title,
        company,
        location,
        from,
        to,
        current,
        description
      };

      profile.experience.unshift(newExperience);
      await profile.save();
      console.log('Experience added');
      res.json(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);
// @router  DELETE api/profile/experience/:exp_id
// @desc    DELETE an user's experience
// @access  Private
router.delete('/experience/:exp_id', Auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    });
    const delete_index = profile.experience
      .map(item => item.id)
      .indexOf(req.params.exp_id);
    console.log(`Delete Index: ${delete_index}`);
    console.log(req.params.exp_id);

    if (delete_index == -1) {
      return res.status(400).send('Profile not found');
    }
    profile.experience.splice(delete_index, 1);
    await profile.save();
    res.json(profile.experience);
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).send('Profile not found');
    }
    res.status(500).send('Error Server');
  }
  //   res.send('On process of deleting experience');
});

// @router  POST api/profile/education
// @desc    POST an user's education
// @access  Private
router.post(
  '/education',
  [
    Auth,
    [
      check('school', 'School is required')
        .not()
        .isEmpty(),
      check('degree', 'Degree is required')
        .not()
        .isEmpty(),
      check('fieldofstudy', 'Fieldofstudy is required')
        .not()
        .isEmpty(),
      check('from', 'From is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (!profile) {
        res.status(400).send('No Profile Found');
      }
      const { school, degree, fieldofstudy, from } = req.body;
      const educationField = {
        school,
        degree,
        fieldofstudy,
        from
      };
      profile.education.push(educationField);

      await profile.save();
      res.send(profile);
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server Error');
    }
  }
);
// @router  DELETE api/profile/education/:exp_id
// @desc    DELETE an user's education
// @access  Private
router.delete('/education/:ed_id', Auth, async (req, res) => {
  try {
    let profile = await Profile.findOne({ user: req.user.id });

    const delete_index = profile.education.map(item => item.id).indexOf(0);

    if (delete_index === -1) {
      return res.status(400).send('Profile not found');
    }
    profile.education.splice(delete_index, 1);

    await profile.save();
    res.send(profile);
  } catch (err) {
    console.log(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).send('Profile not found');
    }
    res.status(500).send('Error Server');
  }
});

// @router  GET api/profile/github/:username
// @desc    GET an user's repo from Github
// @access  Public
router.get('/github/:username', (req, res) => {
  try {
    const options = {
      uri: `https://api.github.com/users/${
        req.params.username
      }/repos?page=2&sort=created:asc&client_id=${config.get(
        'githubClientId'
      )}&client_secret=${config.get('githubSecret')}`,
      method: 'GET',
      headers: { 'user-agent': 'node.js' }
    };

    request(options, (error, response, body) => {
      if (!error && response.statusCode !== 200) {
        return res.status(404).json({ msg: 'No Profile Found' });
      }
      res.json(JSON.parse(body));
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
