import React from 'react';
import { Link } from 'react-router-dom';

import heroImage from '../../assets/undraw_finance_m6vw.svg';
import budgetIcon from '../../assets/device-desktop-dollar.svg';
import expenseIcon from '../../assets/device-mobile-dollar.svg';
import reportIcon from '../../assets/report.svg';

import FeatureCard from '../FeatureCard';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-slate-100 text-gray-700">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-20">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Manage Your <span className="text-slate-700">Finances</span>{' '}
              Smarter
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Track expenses, set budgets, and reach financial goals
              effortlessly — all from one beautiful dashboard.
            </p>
            <Link to="/signup">
              <button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg text-base font-medium shadow-lg transition duration-200">
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
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-700">
            Smart Tools for Better Spending
          </h2>
          <p className="text-gray-500 text-md max-w-xl mx-auto">
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

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-20 bg-slate-100">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-700">
            What Our Users Say
          </h2>
          <p className="text-gray-500 text-md max-w-xl mx-auto">
            Join thousands of users who are already improving their financial
            lives.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-800 font-bold flex items-center justify-center">
                  {`U${i + 1}`}
                </div>
                <div>
                  <p className="font-semibold text-slate-700">User {i + 1}</p>
                  <p className="text-sm text-gray-500">Verified User</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis egestas rhoncus. Donec facilisis fermentum sem, ac
                viverra ante luctus vel.”
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
