import React from 'react';
import { NavLink } from 'react-router-dom';
import dashboardIcon from '../assets/icons8-dashboard-layout-96.png';
import historyIcon from '../assets/icons8-history-96.png';
import logoutIcon from '../assets/icons8-logout-96.png'; 

function NavBar() {
  // return (
  //   <div className="h-screen w-64 bg-gray-500 p-4 flex flex-col fixed">
  //     <h2 className="text-xl font-bold text-white mb-6">My App</h2>

  //     <nav className="flex flex-col space-y-4 text-white">
  //       <NavLink
  //         to="/dashboard"
  //         className={({ isActive }) =>
  //           `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-400 transition ${
  //             isActive ? 'bg-gray-600 font-semibold' : ''
  //           }`
  //         }
  //       >
  //         <img src={dashboardIcon} alt="Dashboard icon" className="w-6 h-6" />
  //         <span>Dashboard</span>
  //       </NavLink>

  //       <NavLink
  //         to="/history"
  //         className={({ isActive }) =>
  //           `flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-400 transition ${
  //             isActive ? 'bg-gray-600 font-semibold' : ''
  //           }`
  //         }
  //       >
  //         <img src={historyIcon} alt="History icon" className="w-6 h-6" />
  //         <span>History</span>
  //       </NavLink>

  //       <NavLink
  //         to="/logout"
  //         className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-400 transition"
  //       >
  //         <img src={logoutIcon} alt="Logout icon" className="w-6 h-6" />
  //         <span>Logout</span>
  //       </NavLink>
  //     </nav>
  //   </div>
  // );

  return (
    <div className="h-screen w-64 bg-gray-400 text-white p-4 flex flex-col justify-center">
      {/* <h2 className="text-2xl font-bold mb-6">Expense Manager</h2> */}

      <nav className="flex flex-col gap-4">
        <div className="flex items-center gap-4 hover:bg-gray-300 p-2 rounded-lg">
          <img src={dashboardIcon} alt="Dashboard" className="w-6 h-6" />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center gap-4 hover:bg-gray-300 p-2 rounded-lg">
          <img src={historyIcon} alt="History" className="w-6 h-6" />
          <span>History</span>
        </div>
        <div className="flex items-center gap-4 hover:bg-gray-300 p-2 rounded-lg">
          <img src={logoutIcon} alt="Logout" className="w-6 h-6" />
          <span>Logout</span>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
