export const checkAuth = async () => {
    try {
      const response = await fetch('https://nhakhoamyduc-api.onrender.com/api/check-auth', {
        credentials: 'include', // This is important for cookies
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };