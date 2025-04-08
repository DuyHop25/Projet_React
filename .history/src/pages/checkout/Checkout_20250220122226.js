const API = 'https://fe21-db.vercel.app/educino';

/**
 * A helper function to fetch data from your API.
 */
export default async function fetchFromAPI(endpointURL, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts };

  const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'appzlication/json',
    },
  });

  return res.json();
}