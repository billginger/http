const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const hostA = [
	'lscha.com', 'www.lscha.com', 'laoshancha.com', 'www.laoshancha.com',
	'qindaopai.com', 'www.qindaopai.com', 'wgzjy.com', 'www.wgzjy.com',
	'lzbb.cn', 'www.lzbb.cn', 'ykta.cn', 'www.ykta.cn',
	'battle.pub', 'www.battle.pub', 'diablo.pub', 'www.diablo.pub',
	'warcraft.pub', 'www.warcraft.pub', 'starcraft.pub', 'www.starcraft.pub',
	'ourhome.pub', 'www.ourhome.pub', 'starwars.pub', 'www.starwars.pub',
	'wars.pub', 'www.wars.pub', 'kof.pub', 'www.kof.pub', 'kom.pub', 'www.kom.pub'
];
const hostB = 'nodejs.top';

http.createServer((req, res) => {
	if (hostA.indexOf(req.headers.host) >= 0) {
		proxy.web(req, res, { target: 'http://localhost:3001' });
	} else if (req.headers.host && req.headers.host.indexOf(hostB) >= 0) {
		res.writeHead(301, { 'Location': 'https://nodejs.top' });
		res.end();
	} else {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write('<h1>Node.js</h1>');
		res.end('<p>Hello World!</p>');
	}
}).listen(80);

console.log('HTTP server is running.');