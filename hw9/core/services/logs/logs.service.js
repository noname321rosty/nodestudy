const LogModel = require('../../db/mongo-models/logs');

module.exports = {
    createLogs: (logInfo) => new LogModel(logInfo).save()
};
