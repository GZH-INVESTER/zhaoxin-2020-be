import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  //user
  router.post('/login',controller.user.login);
  router.get('/logout', controller.user.logout);
  router.get('/isLogged', controller.user.isLogged);
  //datetime
  router.post('/createDatetime',controller.itime.createDate)
  router.put('/updateDatetime',controller.itime.updateDate)
  router.delete('/deleteDate/:id',controller.itime.deleteDate)

  //place
  router.post('/createPlace',controller.place.createPlace)
  router.put('/updatePlace',controller.place.updatePlace)
  router.delete('/deletePlace/:id',controller.place.deletePlace)
};
