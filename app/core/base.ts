const { Controller } = require('egg');
class BaseController extends Controller {
  isLogged(){
    if(!this.ctx.session.userId){
      this.ctx.body={
        success:0,
        errMsg:'未登录'
      }
      return 
    }
    return true
  }
  success(data){
    this.ctx.body={
      success:1,
      data
    }
  }
  fail(errMsg){
    this.ctx.body={
      success:0,
      errMsg
    }
  }
}
module.exports = BaseController;