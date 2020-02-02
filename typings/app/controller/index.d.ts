// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportItime from '../../../app/controller/itime';
import ExportPlace from '../../../app/controller/place';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    itime: ExportItime;
    place: ExportPlace;
    user: ExportUser;
  }
}
