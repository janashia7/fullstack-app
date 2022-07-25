const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleCientSecret } = require("../config/keys");

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleCientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      //  accessToken
      //  refreshToken
      //  profile
    }
  )
);
