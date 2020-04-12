import { CronJob } from 'cron';
import { createServer } from 'http';
import * as api from './api';
import constants from './constants';

function fetchPingURLS() {
    const urls = constants.pingURLS.split(';');
    console.log(urls);
    Promise.all(urls.map(url => api.fetchURL(url))).catch(error =>
        console.error(error)
    );
}

const cronTime = `*/${constants.runSecond} */${constants.runMinute} * * * *`;

const job = new CronJob(cronTime, fetchPingURLS, null, false, 'Asia/Singapore');

createServer({}, (req, res) => {
    res.writeHead(200);
    res.end('Ping Server');
}).listen(constants.port);

job.start();

console.log('Constant values are');
console.log(constants);

console.log(`Running cron job with value: ${cronTime}`);
