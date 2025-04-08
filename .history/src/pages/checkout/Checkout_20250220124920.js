const API = 'https://fe21-db.vercel.app/educino';

/**
 * Hàm gọi API chung để gửi request tới backend.
 * @param {string} endpointURL - Đường dẫn endpoint API.
 * @param {Object} opts - Tuỳ chọn request (method, body).
 * @returns {Promise<Object>} - Dữ liệu JSON từ API.
 */
export default async function fetchFromAPI(endpointURL, opts = {}) {
  const { method = 'POST', body = null } = opts;

  const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}
