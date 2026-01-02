require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'paused';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : [''],

    NUMBER: process.env.YOUR_NUMBER || '254742063632',
    MODE: (process.env.MODE || 'private').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'FLASH-MD',
    ANTICALL: process.env.ANTICALL || 'on',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'on',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lTdnYwVFhvYytRK0FJS3pHTzh5aTR3eFFCYXprcFQ0T3dQMmowMGhGRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTStRMWRmS0VEMFpFSjNQc1VsN055SkhVdWVCSUNTSHRFTWl5K1g2SWlIcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvS05ONHc0OG5PNnNvY1ZQZitXa240V1hLRDUzT0t5YnRTMmdxYzlhQ0ZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzQzMzRk9keG5qbHdkNEl4ZDhyZmRTU0JkVkk1Tm96NncxYldSS0dqamhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBFaVYzejhpWStaaGdOLzhPM2I4VW0xTHExd01ycE1wblBxT29Zd2w1Vm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxDaXUxcXJTNVM0ZGp6cTZEMU14RmdoQVZHVGxrekkxMkF1V0wydnQrU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0V3Z2lKSlQ2cHJBUFYrN0cvRVpnSTZOdWIyNmx5TGNlSXQ2ZUlzYXhrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFlidDJXMW1CSERkZjRWLzlZYStjV2ZQdGx0Vy9UNHJVMlNlVm1lK2lXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcvU1lTSXJucjFIWElsa2g3M2l3RmNRbjN3bklPVVlzTWV1L1V2VFJqc1I1NC9KNDF5WmVsS05pdTdMc2YvcnVBWmlwM09JTU1XZDFURnFCcEtLc0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiIvRGFZSXFFbU1xc0duZ25JWlVsRFB5ajZ0bUFCQnR6SFl1NkpWM3VBVklvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJDWEJXV1JQRiIsIm1lIjp7ImlkIjoiOTQ3MjkxMTk2NDM6MzlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODA1MDk0MzkxODA4MzI6MzlAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLQ2NwdGdCRU12cjNNb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJNNlJ3ZWN0N0dsdTZQNFp6SVBsVmdrdlFBekFOT3Ntb3FnT0hOYlJxMEdNPSIsImFjY291bnRTaWduYXR1cmUiOiJzeHUzTmVnWGZXZUxLUmt3REZQUklzR0N6bGozQ2JjQllGWGdHUFVOYUtoZUpvcE1ka2V4T3hzL0V0UEY4ZG9CM0ExSzIrU2NBaTJyM1IrS1hCRC9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTmZVVzFaRWIwd3hIOWg0cVFDSEdTelMyT3VENzZyNU81bEJWeWp1Z0crM2pkbE9JSW5RbDVZOG56TWw0NlY0TGFIbHNiTnRnSFlwalAzeUNIUHJFQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyOTExOTY0MzozOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUT2tjSG5MZXhwYnVqK0djeUQ1VllKTDBBTXdEVHJKcUtvRGh6VzBhdEJqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWdnUyJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjczMjMwODYsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmYwIn0=',
    timezone: 'Africa/Nairobi',

    USER_LID: process.env.YOUR_LID, 

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'typing'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'recording'),

    mapPresence
};
