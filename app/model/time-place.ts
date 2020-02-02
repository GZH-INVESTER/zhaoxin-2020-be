import { Application } from 'egg';
import { Model, INTEGER, DATE, BOOLEAN } from 'sequelize';

export class TimePlace extends Model {
  id: number;
  timeId: number;
  placeId: number;
  campus:number;
  isChosen: boolean;
  createdAt:string;
  updatedAt:string
  static associate: () => any
}

export default (app: Application) => {
  TimePlace.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    timeId: { type: INTEGER, field: 'time_id' },
    placeId: { type: INTEGER, field: 'place_id' },
    campus:INTEGER,
    isChosen: { type: BOOLEAN, field: 'is_chosen' },
    createdAt: { type: DATE, field: 'created_at' },
    updatedAt: { type: DATE, field: 'updated_at' },
  }, {
    modelName: 'time_place',
    //freezeTableName: true,
    tableName: 'time_places',
    sequelize: app.model,
  })
  TimePlace.associate = () => {
    app.model.TimePlace.hasOne(app.model.Student, {
      foreignKey: 'timeplaceId'
    });
  }
  return TimePlace;
}