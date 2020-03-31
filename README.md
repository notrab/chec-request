# chec-request

🔌 Lightweight Chec client for Node, browsers and simple apps or serverless functions

## Quickstart

Send requests with a function, or with a Chec instance.

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN');

commerce.get('products').then(products => console.log(products));

// Or with a simple request

request(endpoint, { token: 'CHEC_API_TOKEN' }).then(data => console.log(data));
```

## Examples

Some API endpoints require a **secret key**, you should check the [API documentation](https://commercejs.com/docs/api) and pass the applicable `TOKEN`.

### `GET`

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN');

commerce
  .get('products/prod_f89398fs489g')
  .then(products => console.log(products));

// Or with a simple request

request('products', {
  token: 'CHEC_API_TOKEN',
}).then(products => console.log(products));
```

### `GET` with params

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN');

commerce
  .get('products', {
    limit: 5,
    category_slug: 'accessories',
  })
  .then(products => console.log(products))
  .catch(err => console.log(err));

// Or with a simple request

request('products', {
  token: 'CHEC_API_TOKEN',
  params: {
    limit: 5,
    category_slug: 'accessories',
  },
})
  .then(products => console.log(products))
  .catch(err => console.log(err));
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

commerce.post('discounts', data).then(discount => console.log(discount));

// Or with a simple request

request('discounts', {
  token: 'CHEC_API_TOKEN',
  method: 'POST',
  data,
}).then(data => console.log(data));
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

commerce.put('orders/orderId', data).then(discount => console.log(discount));

// Or with a simple request

request('orders/orderId', {
  token: 'CHEC_API_TOKEN',
  method: 'PUT',
  data,
}).then(data => console.log(data));
```

### `DELETE`

```js
const { Chec, request } = require('chec-request');

const commerce = new Chec('CHEC_API_TOKEN');

commerce.delete('discounts/RHKZKU71WG').then(res => console.log(res));

// Or with a simple request

request('discounts/RHKZKU71WG', {
  token: 'CHEC_API_TOKEN',
  method: 'DELETE',
}).then(res => console.log(res));
```
