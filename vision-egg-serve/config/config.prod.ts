import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {};
  /**
   * 服务器环境我们会使用 /home/admin/logs 作为日志目录
   */
  config.logger = {
    dir: '/home/admin/logs/visionapp'
  }
  return config;
};
