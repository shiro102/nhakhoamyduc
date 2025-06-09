export const checkAuth = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/check-auth', {
        credentials: 'include', // This is important for cookies
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };