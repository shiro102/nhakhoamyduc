import { apiUrl } from "../config/api";

export const checkAuth = async () => {
    try {
      const response = await fetch(apiUrl("/api/check-auth"), {
        credentials: 'include', // This is important for cookies
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };