# MedaPay Node.js Library
The MedaPay Node SDK provides convenient access to the MedaPay API from applications written in server-side JavaScript.

For complete request/response flow and types please check [HTTP API Guide](HTTP_API.md).

## Installation

Install the package with:

```sh
npm install medapay --save
# or
yarn add medapay
```

## Usage

The package needs to be configured with your account's bearer token, which is
provided by MedaPay team. Require it and initialize with the provided token and preferred environment
value:

<!-- prettier-ignore -->
```js
const IS_SANDBOX = true;
const MedaPay = require('medapay').init({
    bearerToken: 'eyJ......'
}, IS_SANDBOX);
```

Bill Creation:
<!-- prettier-ignore -->
```js
const SAMPLE_BILL = {
    "purchaseDetails": {
        "orderId": "order_12345678900ffx",
        "description": "Sample good at store x",
        "amount": 12.50,
        "customerName": "Ayele Mekite",
        "customerPhoneNumber" : "+251911000000"
    },
    "redirectUrls": {
        "returnUrl": "https://example.et/return",
        "cancelUrl": "https://example.et/cancel",
        "callbackUrl": "https://example.et/callback"
    }
};

MedaPay.create(SAMPLE_BILL)
  .then(createBillResponse => console.log(createBillResponse.billReferenceNumber))
  .catch(error => console.error(error));
```

Bill Status Check:
<!-- prettier-ignore -->
```js
MedaPay.bill(billReferenceNumber)
  .then(bill => console.log(bill.status))
  .catch(error => console.error(error));
```
