const express = require('express');
const router = express.Router();
const Auth = require('../../middleware/auth');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const { check, validationResult } = require('express-validator');

// @route   GET api/auth
// @decs    Test route
// @access  Public

router.get('/', Auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

// @route   GET api/auth
// @decs    Authenticate user and get token
// @access  Public

router.post(
  '/',
  [
    check('email', 'Email is reqiored').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    const playload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      playload,
      config.get('jwtSercret'),
      { expiresIn: '1100h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  }
);

module.exports = router;
