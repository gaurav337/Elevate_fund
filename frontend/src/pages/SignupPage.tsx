import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button, Input } from "../components/ui";
import { useAuth } from "../contexts/AuthContext";

interface FormData {
  email: string;
  password: string;
  userType: 'entrepreneur' | 'investor';
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    company: string;
    position: string;
  };
}

const SignupPage = () => {
  const { signup, error } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    userType: 'entrepreneur',
    profile: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      company: '',
      position: ''
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData);
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof FormData] as Record<string, string>),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8"
      >
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white"
          >
            Create your account
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400"
          >
            Start your fundraising journey today
          </motion.p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded"
            >
              {error}
            </motion.div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                I am a...
              </label>
              <select
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600"
              >
                <option value="entrepreneur">Entrepreneur</option>
                <option value="investor">Investor</option>
              </select>
            </div>

            <Input
              label="First Name"
              type="text"
              name="profile.firstName"
              value={formData.profile.firstName}
              onChange={handleChange}
              required
            />

            <Input
              label="Last Name"
              type="text"
              name="profile.lastName"
              value={formData.profile.lastName}
              onChange={handleChange}
              required
            />

            <Input
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <Input
              label="Phone Number"
              type="tel"
              name="profile.phoneNumber"
              value={formData.profile.phoneNumber}
              onChange={handleChange}
            />

            <Input
              label="Company"
              type="text"
              name="profile.company"
              value={formData.profile.company}
              onChange={handleChange}
            />

            <Input
              label="Position"
              type="text"
              name="profile.position"
              value={formData.profile.position}
              onChange={handleChange}
            />
          </div>

          <div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Sign Up
            </Button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
          >
            Log in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
