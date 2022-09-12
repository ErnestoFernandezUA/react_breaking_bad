export const BASE_URL = 'https://www.breakingbadapi.com/api';

type requestOption = {
  method: string;
  headers?: {
    'Content-type': string;
  };
  body?: string;
};

export const request = async (
  url: string,
  options: requestOption = {
    method: 'GET',
  },
) => {
  // eslint-disable-next-line no-console
  console.log(`request to: ${BASE_URL}${url}`);

  // eslint-disable-next-line no-console
  console.log('request options:', options);

  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(
      `${response.status} - ${response.statusText}`,
    );
  }

  return response.json();
};
