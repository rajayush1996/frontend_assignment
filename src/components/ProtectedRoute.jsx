// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    // not logged in → redirect to login, keep track of where they were
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  // logged in → render the protected children
  return children;
}
