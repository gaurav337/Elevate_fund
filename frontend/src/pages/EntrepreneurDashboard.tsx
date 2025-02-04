import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, DollarSign, TrendingUp, Plus, AlertCircle } from "lucide-react";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import { entrepreneursAPI } from "../services/api";

interface Project {
  id: string;
  name: string;
  description: string;
  fundingGoal: number;
  fundingRaised: number;
  status: 'draft' | 'active' | 'funded' | 'closed';
  createdAt: string;
}

interface PaginationState {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gray-200 rounded-full h-12 w-12"></div>
            <div className="bg-gray-200 h-4 w-16 rounded"></div>
          </div>
          <div className="h-6 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      ))}
    </div>
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
        <div className="h-6 bg-gray-200 rounded w-1/4"></div>
      </div>
      <div className="p-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const EntrepreneurDashboard = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 10
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      if (user?.id) {
        try {
          setIsLoading(true);
          setError(null);
          const response = await entrepreneursAPI.getProjects(user.id);
          setProjects(response.data.data);
          setPagination(response.data.pagination);
        } catch (error: any) {
          console.error('Failed to fetch projects:', error);
          setError(error.response?.data?.message || 'Failed to load projects. Please try again.');
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProjects();
  }, [user?.id]);

  const stats = [
    {
      title: "Total Projects",
      value: pagination.totalItems,
      icon: BarChart3,
      trend: "+12.5%",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Investors",
      value: "24",
      icon: Users,
      trend: "+8.2%",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      title: "Total Funding",
      value: "₹12.5L",
      icon: DollarSign,
      trend: "+15.3%",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Growth Rate",
      value: "18.2%",
      icon: TrendingUp,
      trend: "+4.1%",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
  ];

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Entrepreneur Dashboard</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {error && (
        <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center text-red-700">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{error}</span>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.trend}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Projects List */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Active Projects
          </h3>
        </div>
        {projects.length === 0 ? (
          <div className="p-8 text-center">
            <div className="mb-4">
              <Plus className="w-12 h-12 text-gray-400 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No projects yet</h3>
            <p className="text-gray-500 mb-4">Get started by creating your first project</p>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Project
            </Button>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-medium text-indigo-600 truncate">
                      {project.name}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {project.description}
                    </p>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Goal: ₹{project.fundingGoal.toLocaleString()}</span>
                        <span>
                          {((project.fundingRaised / project.fundingGoal) * 100).toFixed(1)}% Funded
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-indigo-600 h-2 rounded-full"
                          style={{
                            width: `${Math.min(
                              (project.fundingRaised / project.fundingGoal) * 100,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;
