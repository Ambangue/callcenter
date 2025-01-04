import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  defaultMeta: { service: 'acpe-omnicall' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

export const logError = (error: Error, context?: object) => {
  logger.error({
    message: error.message,
    stack: error.stack,
    ...context
  });
};

export const logInfo = (message: string, context?: object) => {
  logger.info({
    message,
    ...context
  });
};

export const logWarning = (message: string, context?: object) => {
  logger.warn({
    message,
    ...context
  });
};

export default logger;