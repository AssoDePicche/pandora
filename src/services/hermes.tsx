import config from '@/config';

const request = async (url, method, body = null) => {
  const token = localStorage.getItem('token');

  const headers = new Headers({
    'Accept': 'application/json',
    'Accept-Language': config.language,
  });

  if (token) {
    headers.set('Authorization', `${token}`);
  }

  const options = {
    method: method,
    headers: headers,
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    return await fetch(url, options).then((response) => response.json());
  } catch (error) {
    console.error('Request failed: ', error);

    throw error;
  }
};

const get = (url) => request(url, 'GET');

const post = (url, body) => request(url, 'POST', body);

export default {
  get,
  post,
};
