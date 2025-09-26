export const logger = {
  log: (...args: any[]) => import.meta.env.DEV && console.log(...args),
  warn: (...args: any[]) => import.meta.env.DEV && console.warn(...args),
  error: (...args: any[]) => console.error(...args),
};