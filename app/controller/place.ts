const Controller = require('../core/base');

export default class PlaceController extends Controller {
  async createPlace(){
    const { ctx, service, app } = this
    if (!this.isLogged()) return
    const { campus , location} = ctx.request.body
    const createRule = {campus:'myCampus',location:'myLocation'}
    let errs = app.validator.validate(createRule,ctx.request.body);
    if(errs){
      this.fail(errs)
      return
    }
    const newPlace=await service.place.createPlace(campus,location)
    if(newPlace){
      this.success(newPlace)
    }
    return
  }
  async updatePlace(){
    const { ctx, service, app } = this
    if (!this.isLogged()) return
    const {id, campus , location} = ctx.request.body
    const createRule = {id:'myId',campus:'myCampus',location:'myLocation'}
    let errs = app.validator.validate(createRule,ctx.request.body);
    if(errs){
      this.fail(errs)
      return
    }
    const place=await service.place.updatePlace(id,campus,location)
    if(place){
      this.success(place)
    }
  }
  async deletePlace(){
    const { ctx, service, app } = this
    if (!this.isLogged()) return
    const id = Number(ctx.params.id)
    let errs = app.validator.validate({id:'myId'},{id});
    if(errs){
      this.fail(errs)
      return
    }
    const place=await service.place.deletePlace(id)
    if(place){
      ctx.body={
        success:1
      }
    }
    return
  }

}