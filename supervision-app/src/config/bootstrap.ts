/**
 * app样式引入以及自适应加载配置
 */
import { antdv } from './antdv';

export const bootstrap = (app: any) => {
  screenAdaptation();
  app.use(antdv);
  return app;
};

const screenAdaptation = () => {
  try {
    setBodySize();
  } catch (e: any) {
    throw new Error(e);
  }
};
window.onresize = () => {
  setBodySize();
};

const setBodySize = () => {
  const clientWidth = document.documentElement.clientWidth;
  const clientHeight = document.documentElement.clientHeight;
  const pageWidth = clientWidth / clientHeight > 16 / 9 ? clientHeight * (16 / 9) : clientWidth;
  const pageH = pageWidth / (16 / 9);
  document.documentElement.style.fontSize = `${pageWidth / 100}px`;
};
