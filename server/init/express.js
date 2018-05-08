import express from 'express';
import passport from 'passport';
import dotenv from 'dotenv';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import flash from 'express-flash';
import methodOverride from 'method-override';
import gzip from 'compression';
import helmet from 'helmet';
import { sessionSecret, sessionId } from '../../config/secret';
import { session as dbSession } from '../db';
import unsupportedMessage from '../db/unsupportedMessage';

export default app => {
  app.set('port', process.env.PORT || 3000);

  if (process.env.NODE_ENV === 'production') {
    app.use(gzip());
    // Secure your Express apps by setting various HTTP headers. Documentation: https://github.com/helmetjs/helmet
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(methodOverride());
  app.use(cookieParser());

  app.use(express.static(path.join(process.cwd(), 'public')));

  app.set('trust proxy', 'loopback');

  let sessionStore = null;
  if (!dbSession) {
    console.warn(unsupportedMessage('session'));
  } else {
    sessionStore = dbSession();
  }

  const sess = {
    resave: false,
    saveUninitialized: false,
    secret: sessionSecret,
    proxy: true, // The "X-Forwarded-Proto" header will be used.
    name: sessionId,
    // Add HTTPOnly, Secure attributes on Session Cookie
    // If secure is set, and you access your site over HTTP, the cookie will not be set
    cookie: {
      httpOnly: true,
      secure: false,
    },
    store: sessionStore,
  };

  console.log('--------------------------');
  console.log('===> 😊  Starting Server . . .');
  console.log(`===>  Environment: ${process.env.NODE_ENV}`);
  console.log(`===>  Listening on port: ${app.get('port')}`);
  console.log(`===>  Using MongoDB`);
  if (process.env.NODE_ENV === 'production') {
    console.log('===> 🚦  Note: In order for authentication to work in production');
    console.log('===>           you will need a secure HTTPS connection');
    sess.cookie.secure = true; // Serve secure cookies
  }
  console.log('--------------------------');

  app.use(session(sess));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(flash());
};
