require('cross-fetch/polyfill');

class Chec {
  constructor(token, ...options) {
    if (!token) throw new Error('No API token provided');

    const { headers } = options;

    this.token = token;
    this.options = {
      baseUrl: 'https://api.chec.io',
      version: 'v1',
      ...options,
    };
    this.headers = {
      'Content-Type': 'application/json',
      'X-Authorization': token,
      ...headers,
    };
  }

  setHeaders(headers) {
    this.headers = headers;

    return this;
  }

  setHeader(key, value) {
    this.headers[key] = value;

    return this;
  }

  async request({ endpoint, params, method = undefined, data = undefined }) {
    const { baseUrl, version } = this.options;
    const headers = this.headers;

    const queryString = params
      ? `?${Object.keys(params)
          .map(
            (k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
          )
          .join('&')}`
      : '';

    const url = `${baseUrl}/${version}/${endpoint}${queryString}`;

    console.log(url);

    const response = await fetch(url, {
      headers,
      ...(method && { method }),
      ...(data && { body: JSON.stringify(data) }),
    });

    const json = await response.json();

    if (!response.ok) throw json;

    return json;
  }

  get(endpoint, params) {
    return this.request({
      endpoint,
      params,
    });
  }

  post(endpoint, data) {
    return this.request({
      method: 'POST',
      endpoint,
      data,
      params,
    });
  }

  put(endpoint, data) {
    return this.request({
      method: 'PUT',
      endpoint,
      data,
    });
  }

  delete(endpoint) {
    return this.request({
      method: 'DELETE',
      endpoint,
    });
  }
}

const request = async (endpoint, { token, ...rest }) => {
  const client = new Chec(token);

  return client.request({
    endpoint,
    ...rest,
  });
};

module.exports = {
  Chec,
  request,
};
