import { Application } from 'egg';
import { Model, INTEGER, STRING, DATE } from 'sequelize';

export class Place extends Model {
  id: number;
  campus:number;
  location: string;
  createdAt:string;
  updatedAt:string;
  static associate: () => any
}

export default (app: Application) => {
  Place.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    campus:INTEGER,
    location: STRING,
    createdAt: { type: DATE, field: 'created_at' },
    updatedAt: { type: DATE, field: 'updated_at' },
  }, {
    modelName: 'place',
    sequelize: app.model,
  })
  Place.associate = () => {
    app.model.Place.belongsToMany(app.model.Itime,{
      through:app.model.TimePlace,
      foreignKey:'placeId',
      otherKey:'timeId'
    })
  }
  return Place;
}