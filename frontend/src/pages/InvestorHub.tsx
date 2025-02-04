import { useEffect, useState } from 'react';
import { Search, DollarSign, TrendingUp, Users, Activity } from 'lucide-react';
import { Button, Input } from '../components/ui';
import { investorsAPI } from '../services/api';
import type { Project } from '../types/api';

interface Stats {
  title: string;
  value: string;
  trend: string;
  icon: React.ElementType;
}

const stats: Stats[] = [
  {
    title: 'Total Investment',
    value: '₹25.6Cr',
    trend: '+12% from last month',
    icon: DollarSign
  },
  {
    title: 'Active Deals',
    value: '38',
    trend: '+8% from last month',
    icon: Activity
  },
  {
    title: 'Investor Network',
    value: '156',
    trend: '+15% from last month',
    icon: Users
  },
  {
    title: 'Success Rate',
    value: '92%',
    trend: '+5% from last month',
    icon: TrendingUp
  }
];

const InvestorHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sector, setSector] = useState('Healthcare');
  const [investmentRange, setInvestmentRange] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await investorsAPI.getAvailableProjects();
        setProjects(response.data.data);
      } catch (error: any) {
        console.error('Failed to fetch projects:', error);
        setError(error.response?.data?.message || 'Failed to load projects');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return (
      <div className="p-4 text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Investor Hub
      </h1>

      {/* Search Section */}
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96"
          />
          <select
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="w-full md:w-48 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="Healthcare">Healthcare</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
          </select>
          <select
            value={investmentRange}
            onChange={(e) => setInvestmentRange(e.target.value)}
            className="w-full md:w-48 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Investment Range</option>
            <option value="50-200">₹50L - ₹2Cr</option>
            <option value="200-1M">₹2Cr - ₹10Cr</option>
            <option value="1M+">₹10Cr+</option>
          </select>
          <Button variant="primary">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div key={stat.title} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="flex items-center">
                <IconComponent className="w-6 h-6 text-primary" />
                <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">{stat.title}</h3>
              </div>
              <p className="mt-2 text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.trend}</p>
            </div>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Available Projects
          </h3>
        </div>
        {isLoading ? (
          <div className="p-4 text-center">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No projects found matching your criteria.
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li
                key={project.id}
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InvestorHub; 