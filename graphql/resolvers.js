import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user';
import Token from '../models/token';

const generateToken = str => {
  if (str) {
    try {
      const token = JSON.parse(str);
      return token;
    } catch (err) {
      return null;
    }
  }
  return null;
};

const isValidToken = str => {
  if (str) {
    try {
      const token = generateToken(str);
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return null;
    }
  }
  return null;
};

const getStatus = (token, tokens) => {
  return isValidToken(token) && tokens.length === 0 ? 200 : 401;
};

const resolvers = {
  Query: {
    async getUserByEmail(_root, { input: { email } }) {
      return User.findOne({ email });
    },
    async isAuthenticated(_root, _args, ctx) {
      const token = generateToken(ctx.req.cookies.token);
      const tokens = await Token.find({ tags: token });
      const status = getStatus(ctx.req.cookies.token, tokens);
      if (status === 401) {
        if (token) {
          const newToken = new Token();
          newToken.tags.push(token);
          newToken.save();
        }
        ctx.res.clearCookie('token');
      }
      return {
        status,
      };
    },
  },
  Mutation: {
    createUser: async (_root, { input: { email, password } }, ctx) => {
      const salt = bcrypt.genSaltSync(10);
      try {
        const user = await User.create({
          email,
          password: bcrypt.hashSync(password, salt),
        });
        const token = jwt.sign(
          { _id: user._id, email: user.email },
          process.env.JWT_SECRET,
          {
            expiresIn: '1d',
          }
        );
        const cookieOpts = {
          path: '/',
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
        };
        ctx.res.cookie('token', JSON.stringify(token), cookieOpts);
        return {
          token,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    signInUser: async (_root, { input: { email, password } }, ctx) => {
      try {
        const user = await User.findOne({
          email,
        });

        const isValidPassword = bcrypt.compareSync(password, user.password);
        if (isValidPassword) {
          const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET,
            {
              expiresIn: '1d',
            }
          );
          const cookieOpts = {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
          };
          ctx.res.cookie('token', JSON.stringify(token), cookieOpts);
        }

        return {
          isAuthenticated: isValidPassword,
        };
      } catch (error) {
        throw new Error(error.message);
      }
    },
    signOutUser: async (_root, _args, ctx) => {
      const token = generateToken(ctx.req.cookies.token);
      if (token) {
        const newToken = new Token();
        newToken.tags.push(token);
        newToken.save();
      }
      ctx.res.clearCookie('token');
      return {
        status: 200,
      };
    },
  },
};

export default resolvers;
