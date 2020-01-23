var bunyan = require('bunyan');

var logger = bunyan.createLogger({
    name: "DemoLogger",                     // logger name
    serializers: {
        req: bunyan.stdSerializers.req,     // standard bunyan req serializer
        err: bunyan.stdSerializers.err      // standard bunyan error serializer
    },
    streams: [
        {
            level: 'info',                  // loging level
            stream: process.stdout          // log INFO and above to stdout
        },
        {
            level: 'info',
            path: '/Users/e092344/Desktop/spike/logs.json'  // log info and above to a file
        }
    ]
});

logger.info({ message: "Application startup" });
