import React from 'react';
import { Link } from 'react-router-dom';

import heroImage from '../../assets/undraw_finance_m6vw.svg';
import budgetIcon from '../../assets/device-desktop-dollar.svg';
import expenseIcon from '../../assets/device-mobile-dollar.svg';
import reportIcon from '../../assets/report.svg';

import FeatureCard from '../FeatureCard';

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-100 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-20">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Manage Your <span className="text-indigo-600">Finances</span>{' '}
              Smarter
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Track expenses, set budgets, and reach financial goals
              effortlessly — all from one beautiful dashboard.
            </p>
            <Link to="/signup">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-base font-medium shadow-lg transition duration-200">
                Get Started Free
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Finance dashboard illustration"
              className="w-full max-w-md drop-shadow-xl animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Smart Tools for Better Spending
          </h2>
          <p className="text-gray-600 text-md max-w-xl mx-auto">
            Everything you need to take control of your money — no fluff, just
            features that work.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <FeatureCard
            icon={expenseIcon}
            title="Expense Tracking"
            description="Easily log and categorize your daily expenses to see where your money is going."
          />
          <FeatureCard
            icon={budgetIcon}
            title="Budget Planning"
            description="Set monthly limits and track your spending to stay within your budget goals."
          />
          <FeatureCard
            icon={reportIcon}
            title="Visual Reports"
            description="See your financial health at a glance with beautiful charts and reports."
          />
        </div>
      </section>
    </div>
  );
}

export default Home;
