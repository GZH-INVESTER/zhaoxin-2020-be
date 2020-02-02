import { Service } from 'egg';
const moment = require('moment');
export default class Itime extends Service {
  //创建时间
  async createDate(interviewDatetime: string) {
    const { ctx } = this
    const { Itime } = ctx.model
    const itimeExist = await Itime.findOne({ where: {interviewDatetime} })
    if (itimeExist) {
      ctx.body = {
        success: 0,
        errMsg: '时间已存在'
      }
      return
    }
    var interviewDate = moment(interviewDatetime).format('YYYY-MM-DD');
    var interviewTime = moment(interviewDatetime).format('HH:mm:ss');
    const id = await (await Itime.create({interviewDate,interviewTime,interviewDatetime })).id
    const itime = await Itime.findByPk(id)
    return { itime }
  }
  //更新时间
  async updateDate(id: number, interviewDatetime: string) {
    const { ctx } = this
    const { Itime } = ctx.model
    const idExist = await Itime.findByPk(id)
    if (!idExist) {
      ctx.body = {
        success: 0,
        errMsg: '该条时间不存在'
      }
      return
    }
    const itimeExist = await Itime.findOne({ attributes: ['id'], where: { interviewDatetime } })
    if (itimeExist) {
      ctx.body = {
        success: 0,
        errMsg: '时间已存在'
      }
      return
    }
    var interviewDate = moment(interviewDatetime).format('YYYY-MM-DD');
    var interviewTime = moment(interviewDatetime).format('HH:mm:ss');
    const status = await Itime.update({interviewDate, interviewTime ,interviewDatetime}, { where: { id } })
    if(status){
      const itime=await Itime.findByPk(id)
      return itime
    } 
    return
  }
  //删除时间
  async deleteDate(id: number) {
    const { ctx } = this
    const { Itime } = ctx.model
    const idExist = await Itime.findOne({ attributes: ['id'], where: { id, delete: false } })
    if (!idExist) {
      ctx.body = {
        success: 0,
        errMsg: '该条时间不存在'
      }
      return
    }
    const itime = await Itime.destroy({where:{id}})
    return itime
  }
}