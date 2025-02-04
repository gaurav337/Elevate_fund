import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
        {/* Background Circle */}
        <circle cx="16" cy="16" r="16" className="fill-indigo-600 dark:fill-indigo-500"/>
        
        {/* Rocket Shape */}
        <path d="M16 6C14.1 6 12.5 7.6 12.5 9.5C12.5 11.4 14.1 13 16 13C17.9 13 19.5 11.4 19.5 9.5C19.5 7.6 17.9 6 16 6Z" fill="white"/>
        <path d="M16 14C13.2 14 11 16.2 11 19V23C11 23.6 11.4 24 12 24H20C20.6 24 21 23.6 21 23V19C21 16.2 18.8 14 16 14Z" fill="white"/>
        
        {/* Growth Arrow */}
        <path d="M22 10L25 13M25 13L22 16M25 13H17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        Elevate<span className="text-indigo-600 dark:text-indigo-400">Fund</span>
      </span>
    </Link>
  );
};

export default Logo; 