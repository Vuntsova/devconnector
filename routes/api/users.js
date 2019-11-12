const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
// example:
// app.post('handle',function(request,response){
//   var query1=request.body.var1;
//   var query2=request.body.var2;
//   });
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Email is reqiored').isEmail(),
    check('password').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(req.body);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User ecists' }] });
      }

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email: email.toLowerCase(),
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };
      console.log(JSON.stringify(payload));
      jwt.sign(
        {
          user: {
            id: user.id
          }
        },
        config.get('jwtSercret'),
        { expiresIn: '1100h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      // const decoded = jwt.verify(this.token, config.get('jwtSercret'));
      // console.log('=========');

      // console.log(decoded);
      // console.log('=========');
      // console.log(user.id);
      // console.log(': ');
      // console.log(req.header('x-auth-token'));
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error HERE');
    }
  }
);
module.exports = router;
