import React from 'react'
import dashboard from "../assets/icons8-dashboard-layout-96.png";
import history from "../assets/icons8-history-96.png"
import transaction from "../assets/icons8-add-96.png"
import settings from "../assets/icons8-settings-96.png"

function NavBar() {
  return (
    <div className="flex flex-col justify-between mt-2">
        <ul>
          <div className="flex flex-row gap-1 ml-1">
            <img src={dashboard}/>
            <p>Dashboard</p>
          </div>
        </ul>

        <ul>
          <div className="flex flex-row gap-1 ml-1">
            <img src={history}/>
            <p>History</p>
          </div>
        </ul>

        <ul>
          <div className="flex flex-row gap-1 ml-1">
            <img src={transaction}/>
            <p>Add Transaction</p>
          </div>
        </ul>


        <ul>
          <div className="flex flex-row gap-1 ml-1">
            <img src={settings}/>
            <p>Settings</p>
          </div>
        </ul>

    </div>
  )
}

export default NavBar