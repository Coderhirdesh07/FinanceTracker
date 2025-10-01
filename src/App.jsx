import React from 'react';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <NavBar />
      <div className="flex-1 p-8 bg-white">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Main Content</h1>
        <p className="text-gray-600">
          This is the main area next to the sidebar.
        </p>
      </div>
    </div>
  );
}

export default App;
