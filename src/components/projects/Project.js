import React from "react";
import { useParams } from "react-router-dom";

function Project() {
  const { projectId } = useParams();
  return (
    <h3 className="top-margin">Projet {projectId}</h3>
  )
}

export default Project;