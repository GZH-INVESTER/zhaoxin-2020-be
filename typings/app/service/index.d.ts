// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportItime from '../../../app/service/itime';
import ExportPlace from '../../../app/service/place';
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    itime: ExportItime;
    place: ExportPlace;
    test: ExportTest;
    user: ExportUser;
  }
}
