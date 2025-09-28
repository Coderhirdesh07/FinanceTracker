import React from 'react'

function FeatureCard({ icon, title, description }) {
    return (
      <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition text-center flex flex-col items-center">
        <img src={icon} alt={title} className="w-14 h-14 mb-4" />
        <h4 className="text-lg font-semibold text-indigo-600 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  }

export default FeatureCard