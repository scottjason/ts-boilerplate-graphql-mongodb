// import jwt from 'jsonwebtoken';
// import Token from '../models/token';

// const PROTECTED_PATHS = ['/dashboard'];

// const generateToken = str => {
//   if (str) {
//     try {
//       const token = JSON.parse(str);
//       return token;
//     } catch (err) {
//       return null;
//     }
//   }
//   return null;
// };

// const isValidToken = str => {
//   if (str) {
//     try {
//       const token = generateToken(str);
//       return jwt.verify(token, process.env.JWT_SECRET);
//     } catch (err) {
//       return null;
//     }
//   }
//   return null;
// };

// const getStatus = (token, tokens) => {
//   return isValidToken(token) && tokens.length === 0 ? 200 : 401;
// };

// export const isAuthenticated = async (req, res, next) => {
//   if (PROTECTED_PATHS.includes(req.originalUrl)) {
//     const token = generateToken(req.cookies.token);
//     const tokens = await Token.find({ tags: token });
//     const status = getStatus(req.cookies.token, tokens);
//     if (status === 401) {
//       if (token) {
//         const newToken = new Token();
//         newToken.tags.push(token);
//         newToken.save();
//       }
//       res.clearCookie('token');
//       res.redirect('/');
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// };
