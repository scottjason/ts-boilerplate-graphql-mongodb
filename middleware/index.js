import express from 'express';
import cookieParser from 'cookie-parser';

export const middleware = app => {
  app.use(express.json());
  app.use(cookieParser());
};
