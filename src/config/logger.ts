import  pino from 'pino'
// logger to be used inplace of console.log
const logger = pino({
    transport: {
        target: 'pino-pretty'
    }
})

export default  logger
