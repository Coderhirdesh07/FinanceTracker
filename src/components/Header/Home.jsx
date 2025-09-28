import React from 'react';
import heroImage from '../../assets/undraw_finance_m6vw.svg';
import budgetIcon from '../../assets/device-desktop-dollar.svg';
import expenseIcon from '../../assets/device-mobile-dollar.svg';
import reportIcon from '../../assets/report.svg';
import FeatureCard from '../FeatureCard';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-12 bg-white">
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Manage Your <span className="text-indigo-600">Finances</span> Smarter
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Take control of your spending, set budgets, and reach your goals — all from one clean interface.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded text-sm hover:bg-indigo-700 transition">
            Get Started Free
          </button>
        </div>
        <img
          src={heroImage}
          alt="Finance illustration"
          className="w-full max-w-md"
        />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 px-6 md:px-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">Features</h3>
          <p className="text-gray-600 text-md">
            Simple tools to make your financial life easier.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={expenseIcon}
            title="Expense Tracking"
            description="Log daily expenses and monitor where your money goes."
          />
          <FeatureCard
            icon={budgetIcon}
            title="Budget Planning"
            description="Set and track monthly budgets to meet your financial goals."
          />
          <FeatureCard
            icon={reportIcon}
            title="Visual Reports"
            description="Understand your spending with clean, visual summaries."
          />
        </div>
      </section>
    </div>
  );
}
export default Home;