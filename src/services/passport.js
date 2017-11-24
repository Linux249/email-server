const passport = require('passport')
const GoogleStrategy= require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('user')

// serialize user.id for cookie
passport.serializeUser((user, done) => {
    done(null, user.id);    // .id is the mongo id
})


passport.deserializeUser((id, done) => {
    //id comes from cookie an is allreaddy deserialized
    User.findById(id).then(user => {
            done(null, user)
        })
})

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        async (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleID: profile.id})
        .then(existingUser => {
            if(existingUser){
                // user exist in DB
                done(null, existingUser);
            } else {
                new User({googleID: profile.id})
                    .save()
                    .then(newUser => done(null, newUser))
        }
        })





            console.log({accessToken})
            console.log({refreshToken})
            console.log({profile})
            console.log({done})
            })
)

module.exports = passport
