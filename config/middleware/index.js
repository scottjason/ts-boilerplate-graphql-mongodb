import express from 'express';
import cookieParser from 'cookie-parser';
import { isAuthenticated } from './authentication';

const middleware = app => {
  app.use(express.json());
  app.use(cookieParser());
  app.use('/dashboard', isAuthenticated);
};

export default middleware;
