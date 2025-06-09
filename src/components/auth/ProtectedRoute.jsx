import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkAuth } from '../../functions/checkAuth';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const response = await checkAuth();
      setIsAuthenticated(response);
      setIsLoading(false);
    };
    checkAuthStatus();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute; 