const express = require('express');
const router = express.Router();
const Auth = require('../../middleware/auth');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

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
    isMatch
      ? res.json({ msg: 'Loged in' })
      : res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
  }
);

module.exports = router;
