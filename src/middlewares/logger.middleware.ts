import { Request, Response, NextFunction } from "express"
import winston from "winston"

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
})

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`)
  next()
}

const errorLoggerMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  logger.error(`${req.method} ${req.url} - Error: ${err.message}`)
  next(err)
}

export { logger, logMiddleware, errorLoggerMiddleware }
