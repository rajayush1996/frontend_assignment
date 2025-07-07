// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login          from './pages/Login';
import Dashboard      from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public login route */}
        <Route path="/" element={<Login />} />

        {/* dashboard is now wrapped in ProtectedRoute */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
