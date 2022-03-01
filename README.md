# whois

[![MIT License](https://img.shields.io/npm/l/@bedirhansamsa/whois)](https://github.com/BEDIRHANSAMSA/whois/blob/main/LICENSE)
[![Downloads](https://img.shields.io/npm/dw/@bedirhansamsa/whois)](https://www.npmjs.com/package/@bedirhansamsa/whois)
[![Version](https://img.shields.io/npm/v/@bedirhansamsa/whois)](https://www.npmjs.com/package/@bedirhansamsa/whois)

Whois lib for domain availability and who is registered data.

## Installation

Install with npm

```bash
  npm i @bedirhansamsa/whois
```

## Usage/Examples

### Code:

```js
const whois = require('@bedirhansamsa/whois');

(async () => {
  const result = await whois('google.com');
  console.log(result);
})();
```

### Output:

```txt
{
  available: false,
  data: '   Domain Name: GOOGLE.COM\r\n' +
    '   Registry Domain ID: 2138514_DOMAIN_COM-VRSN\r\n' +
    '   Registrar WHOIS Server: whois.markmonitor.com\r\n' +
    '   Registrar URL: http://www.markmonitor.com\r\n' +
    '   Updated Date: 2019-09-09T15:39:04Z\r\n' +
    '   Creation Date: 1997-09-15T04:00:00Z\r\n' +
    '   Registry Expiry Date: 2028-09-14T04:00:00Z\r\n' +
    '   Registrar: MarkMonitor Inc.\r\n' +
    '   Registrar IANA ID: 292\r\n' +
    '   Registrar Abuse Contact Email: abusecomplaints@markmonitor.com\r\n' +
    '   Registrar Abuse Contact Phone: +1.2083895740\r\n' +
    '   Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited\r\n' +
    '   Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited\r\n' +
    '   Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited\r\n' +
    '   Domain Status: serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited\r\n' +
    '   Domain Status: serverTransferProhibited https://icann.org/epp#serverTransferProhibited\r\n' +
    '   Domain Status: serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited\r\n' +
    '   Name Server: NS1.GOOGLE.COM\r\n' +
    '   Name Server: NS2.GOOGLE.COM\r\n' +
    '   Name Server: NS3.GOOGLE.COM\r\n' +
    '   Name Server: NS4.GOOGLE.COM\r\n' +
    '   DNSSEC: unsigned\r\n'....
}
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/BEDIRHANSAMSA/whois.git
```

Go to the project directory

```bash
  cd whois
```

Install dependencies

```bash
  npm i
```

Run tests

```bash
  npm run test
```

## Features

-

## Support

For support, email me@bedirhan.dev

## Feedback

If you have any feedback, please reach out to us at me@bedirhan.dev

## Authors

- [@BEDIRHANSAMSA](https://www.github.com/BEDIRHANSAMSA)

## License

[MIT](https://choosealicense.com/licenses/mit/)
