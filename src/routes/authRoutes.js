const passport = require('passport')

module.exports = app => {
    // login via google
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    )
    // google api callback
    app.get('/auth/google/callback', passport.authenticate('google'))
}
