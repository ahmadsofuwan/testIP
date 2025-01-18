const fs = require('fs');
const proxySettings = JSON.parse(fs.readFileSync('./proxySettings.json'));
process.env.GLOBAL_AGENT_HTTP_PROXY = proxySettings.httpProxy;
process.env.GLOBAL_AGENT_HTTPS_PROXY = proxySettings.httpsProxy;

require('global-agent/bootstrap');

const https = require('https');

https.get('https://ipinfo.io/json', (res) => {
  console.log(res.statusCode, res.headers);
  res.pipe(process.stdout);
}).on('error', (err) => {
  console.error('Error:', err);
});
