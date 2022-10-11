import React from "react";
import { Link, useParams } from "react-router-dom";

function SideBarProject() {
  const { projectId } = useParams();
  return (
    <div className="list-group">
      <Link to={`/project/${projectId}/documents`} className="list-group-item list-group-item-action list-group-item-dark">Documents</Link>
      <Link to={`/project/${projectId}/clients`} className="list-group-item list-group-item-action list-group-item-dark">Clients</Link>
      <Link to={`/project/${projectId}/settings`} className="list-group-item list-group-item-action list-group-item-dark">Paramètres</Link>
    </div>
  )
}

export default SideBarProject;