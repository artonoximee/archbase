import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {
  const { currentUser } = useAuth();

  const projectsCollectionRef = collection(db, "projects");
  const [projects, setProjects] = useState([]);
  

  useEffect(() => {
    async function getProjects() {
      const data = await getDocs(projectsCollectionRef);
      setProjects(data.docs.map(doc => ({ ...doc.data(), id: doc.id})))
    }
    getProjects()
  }, [])

  return(
    <>
      <div className="top-margin"></div>
      <h3>Projets</h3>

      { projects.map(project => (
        <div className="card mt-3 text-bg-dark border-secondary" key={project.id}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <strong>{project.projectName}</strong>
              </div>
              <div className="col-lg-4 text-end">
                <a href="" className="btn btn-sm btn-outline-primary">Accéder aux détails du projet</a>
              </div>
            </div>
          </div>
        </div>
      )) }

    </>
  )
}

export default Dashboard;