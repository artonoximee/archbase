import React from "react";
import { useAuth } from "../contexts/AuthContext";

function Dashboard() {
  const { currentUser } = useAuth();

  return(
    <>
      <div className="card mt-5 text-bg-dark">
        <div className="card-header">
          <h2 className="text-primary">Dashboard</h2>
        </div>
        <div className="card-body">
          <p className="card-text">Conecté en tant que <b>{ currentUser.email }</b></p>
        </div>
      </div>
    </>
  )
}

export default Dashboard;