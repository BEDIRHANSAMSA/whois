const isValidDomain = (domain) =>
  domain.match(
    '^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}.(xn--)?([a-z0-9-]{1,61}|[a-z0-9-]{1,30}.[a-z]{2,})$'
  );

const getDomainExtension = (domain) => {
  const valid = isValidDomain(domain);

  if (!valid) return null;

  const domainExtensionPostition = domain.indexOf('.');
  if (domainExtensionPostition < 0) {
    return null;
  }

  return domain.substring(domainExtensionPostition).toLowerCase();
};

module.exports = { getDomainExtension, isValidDomain };
