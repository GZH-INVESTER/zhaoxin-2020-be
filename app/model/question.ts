import { Application } from 'egg';
import { Model, INTEGER, STRING, DATE, BOOLEAN } from 'sequelize';

export class Question extends Model {
  id: number;
  department: number;
  isTailored: boolean;
  description: string;
  detail: string;
  createdAt:string
  updatedAt:string
  static associate: () => any
}

export default (app: Application) => {
  Question.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    department: INTEGER,
    isTailored:{type: BOOLEAN,field:'is_tailored'},
    description: STRING,
    detail: STRING,
    createdAt: { type: DATE, field: 'created_at' },
    updatedAt: { type: DATE, field: 'updated_at' },
  }, {
    modelName: 'user',
    sequelize: app.model,
  })
  Question.associate = () => {
    app.model.Question.hasMany(app.model.Student, {
      foreignKey: 'questionId',
      sourceKey: 'id'
    })
  }
  return Question;
}