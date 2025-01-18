const https = require('https');
https.get('https://ipinfo.io',  (res) => {
  console.log(res.statusCode, res.headers);
  res.pipe(process.stdout);
});