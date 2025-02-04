import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import EntrepreneurDashboard from "./pages/EntrepreneurDashboard";
import InvestorHub from "./pages/InvestorHub";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Protected Route Component
const ProtectedRoute: React.FC<{ 
  element: React.ReactElement; 
  allowedUserType?: 'entrepreneur' | 'investor' 
}> = ({ element, allowedUserType }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
    </div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedUserType && user.userType !== allowedUserType) {
    return <Navigate to={user.userType === 'entrepreneur' ? '/entrepreneur-dashboard' : '/investor-hub'} />;
  }

  return element;
};

// App Router Component
const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/entrepreneur-dashboard"
          element={
            <ProtectedRoute
              element={<EntrepreneurDashboard />}
              allowedUserType="entrepreneur"
            />
          }
        />
        <Route
          path="/investor-hub"
          element={
            <ProtectedRoute
              element={<InvestorHub />}
              allowedUserType="investor"
            />
          }
        />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
