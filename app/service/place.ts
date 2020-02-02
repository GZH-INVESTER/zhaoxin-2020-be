import { Service } from 'egg';

export default class Place extends Service {
  async createPlace(campus: number, location: string) {
    const { ctx } = this
    const { Place } = ctx.model
    const placeExist = await Place.findOne({ attributes: ['id'], where: { campus, location } })
    if (placeExist) {
      ctx.body = {
        success: 0,
        errMsg: '地点已存在'
      }
      return
    }
    const place = await Place.create({ campus, location })
    return place
  }
  async updatePlace(id: number, campus: number, location: string) {
    const { ctx } = this
    const { Place } = ctx.model
    const idExist = await Place.findByPk(id)
    if (!idExist) {
      ctx.body = {
        success: 0,
        errMsg: '该条地点不存在或已经被删除'
      }
      return
    }
    const placeExist = await Place.findOne({ attributes: ['id'], where: { campus, location } })
    if (placeExist) {
      ctx.body = {
        success: 0,
        errMsg: '地点已存在'
      }
      return
    }
    const status = await Place.update({ campus, location }, { where: { id } })
    if (status) {
      const place = await Place.findByPk(id)
      return place
    }
    return
  }
  async deletePlace(id: number) {
    const { ctx } = this
    const { Place } = ctx.model
    const idExist = await Place.findByPk(id)
    if (!idExist) {
      ctx.body = {
        success: 0,
        errMsg: '该条地点不存在或已经被删除'
      }
      return
    }
    const status = Place.destroy({ where: { id } })
    return status
  }

}