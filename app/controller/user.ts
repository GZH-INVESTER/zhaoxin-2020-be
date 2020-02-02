import { Controller } from 'egg';

export default class UserController extends Controller{
  async isLogged(){
    const {ctx} = this
    if(ctx.session.userId){
      ctx.body={isLogged:1}
      return
    }
    ctx.body={isLogged:0}
    return
  }
  async login(){
    const { ctx,app,service} = this
    const { password } = ctx.request.body
    const createRule={password:'myPassword'}
    let errs = app.validator.validate(createRule, ctx.request.body);
    if(errs){
      if(errs[0].message=='required') errs[0].message='密码不能为空'
      ctx.body={
        success:0,
        errMsg:errs[0].message
      }
      return
    }
    const user = await service.user.login(password)
    if(user){
      ctx.session.userId = user.id
      ctx.body = {
        success: 1,
      }
    }
  }
  async logout(){
    const {ctx} = this
    ctx.session.userId=null
    ctx.body={
      success:1
    }
    return
  }
}