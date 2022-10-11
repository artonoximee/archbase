import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

function SideBarProject() {
  const location = useLocation();
  const { projectId } = useParams();
  return (
    <div className="list-group">
      <Link 
        to={`/project/${projectId}/documents`} 
        className={`list-group-item list-group-item-action list-group-item-dark ${location.pathname.includes("documents") ? "active" : ""}`}
      >
        <div className="row">
          <div class="col-2">
            <i className="fa-solid fa-file"></i>
          </div>
          <div className="col-10">
            Documents
          </div>
        </div> 
      </Link>

      <Link 
        to={`/project/${projectId}/clients`} 
        className={`list-group-item list-group-item-action list-group-item-dark ${location.pathname.includes("clients") ? "active" : ""}`}
      >
        <div className="row">
          <div class="col-2">
          <i className="fa-solid fa-users"></i>
          </div>
          <div className="col-10">
            Clients
          </div>
        </div> 
      </Link>

      <Link
        to={`/project/${projectId}/settings`} 
        className={`list-group-item list-group-item-action list-group-item-dark ${location.pathname.includes("settings") ? "active" : ""}`}
      >
        <div className="row">
          <div class="col-2">
            <i className="fa-solid fa-gear"></i>
          </div>
          <div className="col-10">
            Paramètres
          </div>
        </div> 
      </Link>
    </div>
  )
}

export default SideBarProject;