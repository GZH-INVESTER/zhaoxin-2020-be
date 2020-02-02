import { Application } from 'egg';
import { Model, INTEGER, DATE,DATEONLY,TIME} from 'sequelize';

export class Itime extends Model {
  id: number
  interviewDate:string
  interviewTime:string
  interviewDatetime:string
  createdAt:string
  updatedAt:string
  static associate: ()=>any
}

export default (app: Application) => {
  Itime.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    interviewDate: {type:DATEONLY,field:'interview_date'},
    interviewTime: {type:TIME,field:'interview_time'},
    interviewDatetime: {type:DATE,field:'interview_datetime'},
    createdAt: { type: DATE, field: 'created_at' },
    updatedAt: { type: DATE, field: 'updated_at' },
  }, {
    modelName: 'itime',
    //freezeTableName: true,
    tableName: 'itime',
    sequelize: app.model,
  })
  Itime.associate = () => {
    app.model.Itime.belongsToMany(app.model.Place,{
      through:app.model.TimePlace,
      foreignKey:'timeId',
      otherKey:'placeId'
    })
    app.model.Itime.hasMany(app.model.TimePlace,{
      foreignKey:'timeId',
      sourceKey:'id'
    })
  }
  return Itime;
}