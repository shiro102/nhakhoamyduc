/** API base URL. Empty = same origin (e.g. Nginx proxies /api to Express). */
const API_BASE = process.env.REACT_APP_API_URL || "";

export function apiUrl(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${normalized}`;
}
