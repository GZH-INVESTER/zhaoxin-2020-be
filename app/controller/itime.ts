const Controller = require('../core/base');

export default class ItimeController extends Controller {
  async createDate() {
    const { ctx, service, app } = this
    const { interviewDatetime } = ctx.request.body
    const createRule = { interviewDatetime: 'myDateTime' }
    if (!this.isLogged()) return
    let errs = app.validator.validate(createRule, ctx.request.body);
    if (errs) {
      this.fail(errs)
      return
    }
    const newItime = await service.itime.createDate(interviewDatetime)
    if (newItime) {
      this.success(newItime)
    }
    return
  }
  async updateDate() {
    const { ctx, service, app } = this
    const { id, interviewDatetime } = ctx.request.body
    const createRule = { id: 'myId', interviewDatetime: 'myDateTime' }
    if (!this.isLogged()) return
    let errs = app.validator.validate(createRule, ctx.request.body);
    if (errs) {
      this.fail(errs)
      return
    }
    const itime = await service.itime.updateDate(id, interviewDatetime)
    if (itime) {
      this.success(itime)
    }
    return
  }
  async deleteDate() {
    const { ctx, service, app } = this
    const id = Number(ctx.params.id)
    if (!this.isLogged()) return
    let errs = app.validator.validate({ id: 'myId' }, { id });
    if (errs) {
      this.fail(errs)
      return
    }
    const itime = await service.itime.deleteDate(id)
    if (itime) {
      ctx.body = {
        success: 1,
      }
    }
    return
  }
}