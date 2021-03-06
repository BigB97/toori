const express = require('express');
const passport = require('passport');
const User = require('../model/Users');

const router = express.Router();
// Home
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  },
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
module.exports = router;
