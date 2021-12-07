import { useEffect, useRef, useState } from 'react';

/**
 *
 * @param fn 回调函数
 * @param ms 时间间隔
 * @param deps 依赖项数组
 * @returns 控制何时停止防抖函数
 */
export const useDebounce = (fn: Function, ms = 30, deps = []) => {
  let timeout: any = useRef<any>();
  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      fn();
    }, ms);
  }, deps);

  const cancel = () => {
    clearTimeout(timeout.current);
    timeout = null;
  };

  return [cancel];
};

/**
 *
 * @param fn 回调函数
 * @param ms 时间间隔
 * @param deps 依赖项数组
 * @returns 通过控制时间间隔来取消节流效果
 */
export const useThrottle = (fn: Function, ms = 30, deps = []) => {
  let previous = useRef(0);
  let [time, setTime] = useState(ms);
  useEffect(() => {
    let now = Date.now();
    if (now - previous.current > time) {
      fn();
      previous.current = now;
    }
  }, deps);

  const cancel = () => {
    setTime(0);
  };

  return [cancel];
};
