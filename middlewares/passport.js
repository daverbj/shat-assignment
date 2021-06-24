const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require("../models/user")

module.exports = (passport) => {
    let opt = {};
    opt.jwtFromRequest = ExtractJWT.fromAuthHeaderWithScheme('jwt')
    opt.secretOrKey = process.env.SECRET
    try {
        passport.use(new JWTStrategy(opt, async (jwt_payload, done) => {
            let user = await User.findOne({ _id: jwt_payload._id }).exec();
            if(!_.isEmpty(user)) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        }));
    } catch(err) {
        throw(err);
    }
}