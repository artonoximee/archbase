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
      <div className="card mt-5 text-bg-dark">
        <div className="card-header text-bg-secondary">
          <h3 className="mt-2">Dashboard</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Connecté en tant que <b>{ currentUser.email }</b></p>
        </div>
      </div>

      <div className="card mt-5 text-bg-dark">
        <div className="card-header text-bg-secondary">
        <h3 className="mt-2">Projets</h3>
        </div>
        <ul className="list-group list-group-flush">
          { projects.map(project => <li key={ project.id } className="list-group-item text-bg-dark">{ project.projectName }</li>) }
        </ul>
      </div>
    </>
  )
}

export default Dashboard;