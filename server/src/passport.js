import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

import { prisma } from "../generated/prisma-client";

export const authenticateJwt = (req, res, next) =>
  passport.authenticate("jwt", { session: false }, (error, user) => {
    console.log("------------passport/authenticateJwt------------");
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "LgzZIWRTsGzgsVVT7vy9k1dcBP2jci0m"
};

const verifyUser = async (payload, done) => {
  console.log("------------verifyUser------------");
  try {
    const user = await prisma.user({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return error, false;
  }
};

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
