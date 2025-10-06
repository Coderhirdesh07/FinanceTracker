import React from 'react';
//import { XMarkIcon } from '@heroicons/react/24/solid'; // Optional if you're using Heroicons

function TransactionForm({ onCancel }) {
  return (
    <form className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-xl mx-auto border border-gray-200 space-y-6 relative">
      {/* Heading with top-right Cancel Button */}
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-2xl font-semibold text-gray-800">
          New Transaction
        </h2>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-red-500 transition duration-200 text-xl font-bold"
          aria-label="Close"
        >
          &times;
          {/* Or use icon: <XMarkIcon className="w-6 h-6" /> */}
        </button>
      </div>

      {/* Transaction Type */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Transaction Type
        </label>
        <div className="flex gap-6">
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              id="income"
              name="type"
              value="income"
              className="accent-green-600"
            />
            <span>Income</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input
              type="radio"
              id="expense"
              name="type"
              value="expense"
              className="accent-red-500"
            />
            <span>Expense</span>
          </label>
        </div>
      </div>

      {/* Amount */}
      <div>
        <label
          htmlFor="amount"
          className="block text-gray-700 font-medium mb-2"
        >
          Amount
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          min="0"
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Date */}
      <div>
        <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
          Date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Category */}
      <div>
        <label
          htmlFor="category"
          className="block text-gray-700 font-medium mb-2"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">-- Select Category --</option>
          <option value="salary">Salary</option>
          <option value="freelance">Freelance</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-2"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows="3"
          placeholder="Enter a short note (optional)"
          className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-5 rounded transition duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded transition duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TransactionForm;
