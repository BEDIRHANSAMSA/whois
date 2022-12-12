const { expect } = require('chai');
const whois = require('../index');

describe('whois function', () => {
  it('should return available false', async () => {
    const result = await whois('google.com');
    expect(result.available).to.be.false;
  });
  it('should return available false', async () => {
    const result = await whois('google.com.tr');
    expect(result.available).to.be.false;
  });
  it('should return available true', async () => {
    const result = await whois('availabletruedomain.com');
    expect(result.available).to.be.true;
  });
});
