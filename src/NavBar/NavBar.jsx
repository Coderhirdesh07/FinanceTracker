import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import dashboard from '../assets/icons8-dashboard-layout-96.png';
import history from '../assets/icons8-history-96.png';
import transaction from '../assets/icons8-add-96.png';
import settings from '../assets/icons8-settings-96.png';
function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full w-72 p-4 bg-gray-300">
      <NavLink>
        <ul>
          <div className="flex flex-row gap-2 ml-2">
            <img src={dashboard} />
            <p>Dashboard</p>
          </div>{' '}
        </ul>
      </NavLink>
      <NavLink>
        <ul>
          <div className="flex flex-row gap-1 ml-1">
            <img src={history} />
            <p>History</p>
          </div>{' '}
        </ul>
      </NavLink>
      <NavLink>
        <ul>
          <div className="flex flex-row gap-1 ml-1">
            <img src={transaction} />
            <p>Add Transaction</p>
          </div>{' '}
        </ul>
      </NavLink>
      <NavLink>
        <ul>
          <div className="flex flex-row gap-1 ml-1">
            <img src={settings} />
            <p>Settings</p>
          </div>
        </ul>
      </NavLink>
    </div>
  );
}
export default NavBar;
