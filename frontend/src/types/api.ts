export interface User {
  id: string;
  email: string;
  userType: 'entrepreneur' | 'investor';
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    company?: string;
    position?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  fundingGoal: number;
  fundingRaised: number;
  status: 'draft' | 'active' | 'funded' | 'closed';
  entrepreneur: {
    id: string;
    name: string;
    company: string;
  };
  investors: Array<{
    id: string;
    name: string;
    amount: number;
    investedAt: string;
  }>;
  documents: Array<{
    id: string;
    name: string;
    url: string;
    type: string;
    uploadedAt: string;
  }>;
  milestones: Array<{
    id: string;
    title: string;
    description: string;
    targetDate: string;
    status: 'pending' | 'completed' | 'delayed';
  }>;
  createdAt: string;
  updatedAt: string;
}

export interface Investment {
  id: string;
  amount: number;
  status: 'pending' | 'completed' | 'cancelled';
  project: {
    id: string;
    name: string;
    entrepreneur: {
      id: string;
      name: string;
    };
  };
  investor: {
    id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T> {
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
} 