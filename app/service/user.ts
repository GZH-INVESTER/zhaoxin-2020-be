import { Service } from 'egg';



export default class User extends Service {
  async login(password:string){
    const { ctx } = this
    const { User } = ctx.model
    const user = await User.findOne({ where: { id:1 } })
    if(!user||user.password!==password){
      ctx.body={
        success:0,
        errMsg:'密码错误'
      }
      return
    }
    return user
  }

}