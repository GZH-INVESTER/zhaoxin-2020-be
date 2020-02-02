import { Application } from 'egg';
import { Model, INTEGER, STRING, DATE, BOOLEAN } from 'sequelize';

export class Student extends Model {
  id: number;
  sid: string;
  name: string;
  adClass: string;
  phone: string;
  email: string;
  mainDepartment: number;
  subDepartment: string;
  mastered: string;
  wantLearn: string;
  campus: number;
  timeplaceId: number;
  questionId: number;
  sent: boolean;
  status: number;
  score: number;
  evaluation: string;
  delete: boolean
  createdAt:string
  updatedAt:string
  deletedAt:string
  static associate: () => any
}

export default (app: Application) => {
  Student.init({
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    sid: STRING,
    name: STRING,
    adClass: { type: STRING, field: 'ad_class' },
    phone: STRING,
    email: STRING,
    mainDepartment: { type: INTEGER, field: 'main_department' },
    subDepartment: { type: STRING, field: 'sub_department' },
    mastered: STRING,
    wantLearn: { type: STRING, field: 'want_learn' },
    campus: INTEGER,
    timeplaceId: { type: INTEGER, field: 'timeplace_id' },
    questionId: { type: INTEGER, field: 'question_id' },
    sent: { type: BOOLEAN, defaultValue: false },
    status:INTEGER,
    score: INTEGER,
    evaluation: STRING,
    delete: { type: BOOLEAN, defaultValue: false },
    createdAt: { type: DATE, field: 'created_at' },
    updatedAt: { type: DATE, field: 'updated_at' },
    deletedAt: { type: DATE, field: 'deleted_at' },
  }, {
    modelName: 'user',
    sequelize: app.model,
  })
  Student.associate = () => {
    app.model.Student.belongsTo(app.model.TimePlace, {
      foreignKey: 'timeplaceId',
      targetKey: 'id'
    })
    app.model.Student.belongsTo(app.model.Question, {
      foreignKey: 'questionId',
      targetKey: 'id'
    })
  }
  return Student;
}