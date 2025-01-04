import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.metadata()
  ),
  defaultMeta: { 
    service: 'acpe-omnicall',
    env: process.env.NODE_ENV || 'development'
  },
  transports: [
    new winston.transports.File({ 
      filename: 'logs/error.log', 
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    new winston.transports.File({ 
      filename: 'logs/combined.log',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    })
  ]
});

// Add console logs in development
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    )
  }));
}

export const logError = (error: Error, context?: object) => {
  console.error('Error:', error.message, error.stack); // Keep console.error for immediate debugging
  logger.error({
    message: error.message,
    stack: error.stack,
    ...context
  });
};

export const logInfo = (message: string, context?: object) => {
  console.log('Info:', message); // Keep console.log for immediate debugging
  logger.info({
    message,
    ...context
  });
};

export const logWarning = (message: string, context?: object) => {
  console.warn('Warning:', message); // Keep console.warn for immediate debugging
  logger.warn({
    message,
    ...context
  });
};

export default logger;