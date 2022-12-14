const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authRouter = express.Router();

authRouter.post('/signup', passport.authenticate('signup', { session: false }), async (req, res, next) => {

        res.json({
            message: 'Signup successful',
            user: req.user
        });
        
    }
);

authRouter.post(
    '/login',
    async (req, res, next) => {
        passport.authenticate('login', async (err, user, info) => {
            try {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    const error = new Error('email or password is incorrect');
                    return next(error);
                }

                req.login(user, { session: false },
                    async (error) => {
                        if (error) return next(error);

                        const body = { _id: user._id, email: user.email, firstName : user.firstName, lastName: user.lastName };
                        //You store the id and email in the payload of the JWT. 
                        // You then sign the token with a secret or key (JWT_SECRET), and send back the token to the user.
                        // DO NOT STORE PASSWORDS IN THE JWT!
                        const token = jwt.sign({ user : body}, process.env.JWT_Secret, {expiresIn:'1h'});

                        return res.json({ token });
                    }
                );
            } catch (error) {
                return next(error);
            }
        }
        ) (req, res, next);
    }
);

module.exports = authRouter;

//Creating a blog..make a route create-blog route. 
//
