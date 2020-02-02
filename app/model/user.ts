import {Application} from 'egg';
import {Model,INTEGER,STRING,DATE} from 'sequelize';

export class User extends Model{
  id:number;
  password:string;
  createdAt:string;
  updatedAt:string
}

export default(app:Application)=>{
  User.init({
    id:{type:INTEGER,primaryKey:true,autoIncrement:true},
    password:STRING,
    createdAt:{type:DATE,field:'created_at'},
    updatedAt:{type:DATE,field:'updated_at'},
  },{
    modelName:'user',
    sequelize:app.model,
  })
  return User;
}