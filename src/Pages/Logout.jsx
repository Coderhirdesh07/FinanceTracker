import React from 'react';
import logout from '../assets/icons8-logout-96.png';

function Logout() {
  function handleUserLogout() {
    alert('User Logged out');
  }

  return (
    <div className="flex flex-row gap-2 p-2 ">
      <img src={logout} alt="logout img" />
      <button onClick={handleUserLogout}>Logout</button>
    </div>
  );
}

export default Logout;
