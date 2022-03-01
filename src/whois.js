const punycode = require('punycode/');
const { getDomainExtension, isValidDomain } = require('./helpers/domain');
const request = require('./helpers/request');
const servers = require('./helpers/servers');

module.exports = async (domain) => {
  if (!isValidDomain(domain)) {
    throw new Error('Invalid domain');
  }

  const domainExtension = getDomainExtension(domain);

  if (!domainExtension) return Promise.reject(new Error('Invalid domain'));

  const findedServer = servers.find((server) =>
    server[0].includes(domainExtension)
  );

  if (!findedServer) return Promise.reject(new Error('Invalid domain'));

  const host = findedServer[1];

  const asciiDomain = punycode.toASCII(domain);

  const whoisData = await request(host, asciiDomain);

  const available = whoisData.includes(findedServer[2]);

  return {
    available,
    data: whoisData
  };
};
