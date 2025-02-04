import { Link } from "react-router-dom";
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-4 mb-8 flex justify-center">
            <Logo className="scale-110" />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@elevatefund.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  contact@elevatefund.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                123 Startup Street<br />
                Tech Hub, IN 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ElevateFund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
