import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import AddProject from "./projects/AddProject"

function Dashboard() {
  const { currentUser } = useAuth();
  const projectsRef = collection(db, "projects")
  const q = query(projectsRef, where("userId", "==", currentUser.uid));
  // , orderBy("projectName")
  const [projects, setProjects] = useState([]);
  const [reload, setReload] = useState(false)

  const handleReload = () => {    
    setReload(!reload);      
  };

  useEffect(() => {
    async function getProjects() {
      const data = await getDocs(q);
      setProjects(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
    }
    getProjects()
  }, [reload])

  useEffect(() => {

  }, [reload])

  return(
    <>
      <h3 className="top-margin"><i className="fa-solid fa-folder text-primary"></i> Projets</h3>

      {
        projects.length === 0 &&
        <div className="card mt-3 text-bg-dark border-secondary">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col">
                Ajoutez un premier projet à l'aide du formulaire ci-dessous pour démarrer
              </div>
            </div>
          </div>
        </div>
      }

      { projects && projects.map(project => (
        <div className="card mt-3 text-bg-dark border-secondary" key={project.id}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <strong>{project.projectName}</strong>
              </div>
              <div className="col-lg-4 text-end">
                <Link to={`/project/${project.id}/documents`} className="btn btn-outline-primary"><i className="fa-solid fa-gear"></i></Link>
              </div>
            </div>
          </div>
        </div>
      )) }
      
      <AddProject onReload={handleReload} />

    </>
  )
}

export default Dashboard;