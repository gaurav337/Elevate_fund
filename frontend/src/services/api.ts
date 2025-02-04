import axios from 'axios';
import type { User, Project, Investment, ApiResponse, PaginatedResponse } from '../types/api';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle token expiration
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (email: string, password: string) =>
    api.post<ApiResponse<{ token: string; user: User }>>('/auth/login', { email, password }),

  signup: (userData: {
    email: string;
    password: string;
    userType: 'entrepreneur' | 'investor';
    profile: User['profile'];
  }) => api.post<ApiResponse<{ token: string; user: User }>>('/auth/signup', userData),

  getCurrentUser: () => api.get<ApiResponse<User>>('/auth/me'),
};

export const entrepreneursAPI = {
  getProjects: (entrepreneurId: string) =>
    api.get<PaginatedResponse<Project[]>>(`/entrepreneurs/${entrepreneurId}/projects`),

  createProject: (entrepreneurId: string, projectData: Partial<Project>) =>
    api.post<ApiResponse<Project>>(`/entrepreneurs/${entrepreneurId}/projects`, projectData),

  updateProject: (entrepreneurId: string, projectId: string, projectData: Partial<Project>) =>
    api.put<ApiResponse<Project>>(`/entrepreneurs/${entrepreneurId}/projects/${projectId}`, projectData),

  deleteProject: (entrepreneurId: string, projectId: string) =>
    api.delete<ApiResponse<void>>(`/entrepreneurs/${entrepreneurId}/projects/${projectId}`),
};

export const investorsAPI = {
  getInvestments: (investorId: string) =>
    api.get<PaginatedResponse<Investment[]>>(`/investors/${investorId}/investments`),

  createInvestment: (investorId: string, projectId: string, amount: number) =>
    api.post<ApiResponse<Investment>>(`/investors/${investorId}/investments`, {
      projectId,
      amount,
    }),

  getAvailableProjects: (page = 1, limit = 10) =>
    api.get<PaginatedResponse<Project[]>>('/investors/projects', {
      params: { page, limit },
    }),
};

export default api; 