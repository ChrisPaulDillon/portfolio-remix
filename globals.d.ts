export {}
declare global {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
  }
  interface Process {
    env: ProcessEnv
  }
  //@ts-ignore
  let process: Process
}
