const API = 'https://fe21-db.vercel.app/educino';

export default async function fetchFromAPI(endpointURL, opts = {}) {
  const { method, body } = { method: 'POST', body: null, ...opts };

  const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Error fetching ${endpointURL}: ${res.statusText}`);
  }

  return await res.json(); // Đảm bảo trả về dữ liệu JSON
}
