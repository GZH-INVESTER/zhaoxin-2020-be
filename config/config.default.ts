import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_123456';

  // add your egg config in here
  config.middleware = [];
  config.security = {
    csrf: {
      enable: false
    }
  }
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',//ip
    port: 3306,
    database: 'zhaoxin',
    username: 'root',
    password: '123456',
    dialectOptions: {
        dateStrings:true,
        typeCast(field,next){
          if (field.type==="DATETIME"){
            return field.string();
          }
          return next();
        }
    },
    timezone: '+08:00', //for writing from database
  };
  config.validate = {
    convert: false,
    widelyUndefined: true
    // validateRoot: false,
  };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
