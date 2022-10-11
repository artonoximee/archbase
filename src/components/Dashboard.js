import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import AddProject from "./projects/AddProject"

function Dashboard() {
  const projectsCollectionRef = collection(db, "projects");
  const [projects, setProjects] = useState([]);
  const [reload, setReload] = useState(false)
  

  useEffect(() => {
    async function getProjects() {
      const data = await getDocs(projectsCollectionRef);
      setProjects(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
    }
    getProjects()
  }, [])

  useEffect(() => {

  }, [reload])

  return(
    <>
      <h3 className="top-margin"><i className="fa-solid fa-folder text-primary"></i> Projets</h3>

      { projects && projects.map(project => (
        <div className="card mt-3 text-bg-dark border-secondary" key={project.id}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <strong>{project.projectName}</strong>
              </div>
              <div className="col-lg-4 text-end">
                <Link to={`/project/${project.id}`} className="btn btn-outline-primary"><i className="fa-solid fa-gear"></i></Link>
              </div>
            </div>
          </div>
        </div>
      )) }
      
      <AddProject handleClick={setReload} />

    </>
  )
}

export default Dashboard;