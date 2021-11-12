// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportGzip from '../../../app/middleware/gzip';
import ExportRobot from '../../../app/middleware/robot';

declare module 'egg' {
  interface IMiddleware {
    gzip: typeof ExportGzip;
    robot: typeof ExportRobot;
  }
}
