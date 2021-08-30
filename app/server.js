const express = require('express');
const pino = require('pino');

const app = express();

const logger = pino({
    level: 'info',
    timestamp: () => `,"time":${new Date().toISOString()}"`
});

logger.info('ahoy!');
logger.info('logging logging log all the logs');
logger.info('hello, world');
logger.info('a wild log appears');
logger.info('logging elastic world');
logger.info('wow. such logs.');
logger.info('can i haz teh log b0ss');

app.listen(3000, function () {
    logger.info("app listening on port 3000");
});
