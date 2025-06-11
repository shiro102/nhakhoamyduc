import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkAuth } from '../../functions/checkAuth';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const checkAuthStatus = async () => {
    const response = await checkAuth();
    setIsAuthenticated(response);
    setIsLoading(false);
  };

  useEffect(() => {
    checkAuthStatus();
  }, [location.pathname]); // Re-check auth when route changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute; 