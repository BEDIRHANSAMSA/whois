const net = require('net');

module.exports = (host, domain) =>
  new Promise((resolve, reject) => {
    const socket = net.connect({ host, port: 43 }, () => {
      socket.setTimeout(5000);
      socket.write(`${domain}\r\n`);
    });

    let data = '';
    socket.on('data', (chunk) => {
      data += chunk;
    });
    socket.on('close', () => resolve(data));
    socket.on('timeout', () => socket.destroy(new Error('Timeout')));
    socket.on('error', reject);
    socket.on('end', () => resolve(data));
  });
