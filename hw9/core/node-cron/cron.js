const cron = require('node-cron')

module.exports = () => {
    let i = 1;
    cron.schedule('* * * * * *', () => {
        console.log(i)
        i++;
    })
}
