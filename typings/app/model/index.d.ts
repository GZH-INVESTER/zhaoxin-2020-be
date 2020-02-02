// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportItime from '../../../app/model/itime';
import ExportPlace from '../../../app/model/place';
import ExportQuestion from '../../../app/model/question';
import ExportStudent from '../../../app/model/student';
import ExportTimePlace from '../../../app/model/time-place';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Itime: ReturnType<typeof ExportItime>;
    Place: ReturnType<typeof ExportPlace>;
    Question: ReturnType<typeof ExportQuestion>;
    Student: ReturnType<typeof ExportStudent>;
    TimePlace: ReturnType<typeof ExportTimePlace>;
    User: ReturnType<typeof ExportUser>;
  }
}
