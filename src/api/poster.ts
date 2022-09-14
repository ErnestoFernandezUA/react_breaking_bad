export const BASE_URL = 'http://www.omdbapi.com';

type requestOption = {
  method: string;
  headers?: {
    'Content-type': string;
  };
  body?: string;
};

export const requestPoster = async (
  url: string,
  options: requestOption = {
    method: 'GET',
  },
) => {
  // eslint-disable-next-line no-console
  console.log(`request to: ${BASE_URL}/?t=${url}&apikey=8327dd52`);

  // eslint-disable-next-line no-console
  console.log('request options:', options);

  const response = await fetch(`${BASE_URL}/?t=${url}&apikey=8327dd52`);

  if (!response.ok) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(
      `${response.status} - ${response.statusText}`,
    );
  }

  return response.json();
};
