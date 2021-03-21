# chec-request

🔌 Lightweight Chec client for Node, browsers and simple apps or serverless functions

## Quickstart

Send requests with a function, or with a Chec instance.

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN');

commerce.get('products').then((products) => console.log(products));

// Or with a simple request

request(endpoint, { token: 'CHEC_API_TOKEN' }).then((data) =>
  console.log(data)
);
```

## Install

```bash
npm install chec-request
```

## Examples

Some API endpoints require a **secret key**, you should check the [API documentation](https://commercejs.com/docs/api) and pass the applicable `TOKEN`.

### `GET`

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN');

commerce.get('products/prod_f89398fs489g').then((res) => console.log(res));

// Or with a simple request

request('products', {
  token: 'CHEC_API_TOKEN',
}).then((res) => console.log(res));
```

### `GET` with params

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN');

commerce
  .get('products', {
    limit: 5,
    category_slug: 'accessories',
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Or with a simple request

request('products', {
  token: 'CHEC_API_TOKEN',
  params: {
    limit: 5,
    category_slug: 'accessories',
  },
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### `POST`

```js
const { Chec, request } = require('chec-request');

const data = {
  code: 'RHKZKU71WG',
  type: 'fixed',
  value: '49.95',
  limit_quantity: 1,
  quantity: 10,
  expires: 0,
};

const commerce = new Chec('CHEC_API_TOKEN');

commerce.post('discounts', data).then((res) => console.log(res));

// Or with a simple request

request('discounts', {
  token: 'CHEC_API_TOKEN',
  method: 'POST',
  data,
}).then((res) => console.log(res));
```

### `PUT`

```js
const { Chec, request } = require('chec-request');

const data = {
  customer: {
    firstname: 'Jamie',
    lastname: 'Barton',
  },
};

const commerce = new Chec('CHEC_API_TOKEN');

commerce.put('orders/orderId', data).then((res) => console.log(res));

// Or with a simple request

request('orders/orderId', {
  token: 'CHEC_API_TOKEN',
  method: 'PUT',
  data,
}).then((res) => console.log(res));
```

### `DELETE`

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN');

commerce.delete('discounts/RHKZKU71WG').then((res) => console.log(res));

// Or with a simple request

request('discounts/RHKZKU71WG', {
  token: 'CHEC_API_TOKEN',
  method: 'DELETE',
}).then((res) => console.log(res));
```

### Initialize with options

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN', {
  baseUrl: 'http://localhost:5000',
  version: 'v2',
});

commerce.get('products').then((res) => console.log(res));

// Or with a simple request

request('products', {
  token: 'CHEC_API_TOKEN',
  options: {
    baseUrl: 'http://localhost:5000',
    version: 'v2',
  },
}).then((res) => console.log(res));
```

### Initialize with headers

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN', {
  headers: {
    'Custom-Header': 'some value',
  },
});

commerce.get('merchant').then((res) => console.log(res));

// Or with a simple request

request('merchant', {
  token: 'CHEC_API_TOKEN',
  options: {
    headers: {
      'Custom-Header': 'some value',
    },
  },
}).then((res) => console.log(res));
```
