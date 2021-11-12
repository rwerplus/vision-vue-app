import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1635385038584_8306';

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };
  // configuration for session
  config.session = {
    key: 'PANG_SESS', // 设置Key的默认值
    httpOnly: true, // 设置服务端操作
    maxAge: 1000 * 60, // 设置最大有效时间
    renew: true, // 页面有访问动作自动刷新session
  };
  /**
   * dump config
   *
   * It will ignore special keys when dumpConfig
   *
   * @member Config#dump
   * @property {Set} ignore - keys to ignore
   */
  config.dump = {
    ignore: new Set([
      'pass',
      'pwd',
      'passd',
      'passwd',
      'password',
      'keys',
      'masterKey',
      'accessKey',
      // ignore any key contains "secret" keyword
      /secret/i,
    ]),
  };

  // add your egg config middleware in here
  config.middleware = [ 'robot', 'gzip' ];

  config.robot = {
    ua: [ /Baiduspider/i ],
  };
  config.gzip = {
    threshold: 1024,
    // match: '/upload'
    match(ctx) {
      const reg = /iphone|ipad|ipod/i;
      return reg.test(ctx.get('user-agent'));
    },
  };
  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
