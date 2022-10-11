import React from "react";
import { useParams } from "react-router-dom";

function Project() {
  const { projectId } = useParams();
  return (
    <h1 className="top-margin">Project {projectId}</h1>
  )
}

export default Project;