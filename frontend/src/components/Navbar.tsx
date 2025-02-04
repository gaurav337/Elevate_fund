import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";
import { useAuth } from "../contexts/AuthContext";
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/how-it-works"
              className="text-muted hover:text-foreground"
            >
              How it Works
            </Link>
            <Link
              to="/investor-hub"
              className="text-muted hover:text-foreground"
            >
              Investor Hub
            </Link>
            <Link
              to="/browse-projects"
              className="text-muted hover:text-foreground"
            >
              Browse Projects
            </Link>
            <Link
              to="/success-stories"
              className="text-muted hover:text-foreground"
            >
              Success Stories
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
                <Button
                  variant="primary"
                  to={user.userType === 'entrepreneur' ? '/entrepreneur-dashboard' : '/investor-hub'}
                  as={Link}
                >
                  Dashboard
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  to="/login"
                  as={Link}
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  to="/signup"
                  as={Link}
                >
                  Start Your Campaign
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted hover:text-foreground hover:bg-background"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted hover:text-foreground hover:bg-background"
            >
              How it Works
            </Link>
            <Link
              to="/investor-hub"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted hover:text-foreground hover:bg-background"
            >
              Investor Hub
            </Link>
            <Link
              to="/browse-projects"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted hover:text-foreground hover:bg-background"
            >
              Browse Projects
            </Link>
            <Link
              to="/success-stories"
              className="block px-3 py-2 rounded-md text-base font-medium text-muted hover:text-foreground hover:bg-background"
            >
              Success Stories
            </Link>

            {user ? (
              <>
                <Link
                  to={user.userType === 'entrepreneur' ? '/entrepreneur-dashboard' : '/investor-hub'}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted hover:text-foreground hover:bg-background"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-muted hover:text-foreground hover:bg-background"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted hover:text-foreground hover:bg-background"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-primary-600 hover:text-primary-700 hover:bg-background"
                >
                  Start Your Campaign
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
