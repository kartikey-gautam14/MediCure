// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
// const normalize = require('normalize-url');

//const doctorschema = require('../schemas/doctor.cjs');

// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import config from 'config';
// import pkg from 'express-validator';
// const { check, validationResult } = pkg;
// //import { check, validationResult } from 'express-validator';
 import doctorschema from '../schemas/doctor.js';
// import normalize from 'normalize-url';

//const router = express.Router();

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  check('name', 'Name is required').notEmpty(),
  check('username', 'Please include a valid email').notEmpty(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, username, password } = req.body;

    try {
      let user = await doctorschema.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

    //   const avatar = normalize(
    //     gravatar.url(email, {
    //       s: '200',
    //       r: 'pg',
    //       d: 'mm'
    //     }),
    //     { forceHttps: true }
    //   );

      user = new doctorschema({
        name,
        username,
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

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
