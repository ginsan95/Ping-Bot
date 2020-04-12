import * as https from 'https';
import * as http from 'https';

export function fetchURL(url: string): Promise<void> {
    console.log(`Fetching ${url}`);
    return url.startsWith('https') ? fetchHttpsURL(url) : fetchHttpURL(url);
}

function fetchHttpsURL(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const request = https.get(url, { agent: false }, res => {
            res.on('data', () => {
                resolve();
                console.log(`Finished fetching ${url}`);
            });
        });
        request.on('error', reject);
    });
}

function fetchHttpURL(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const request = http.get(url, { agent: false }, res => {
            res.on('data', () => {
                resolve();
                console.log(`Finished fetching ${url}`);
            });
        });
        request.on('error', reject);
    });
}
