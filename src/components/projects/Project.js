import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState();
  
  useEffect(() => {
    async function getProject() {
      const docRef = doc(db, "projects", projectId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProject(docSnap.data());
      }
    }
    getProject()
  }, [])

  return (
    <>
      {
        project &&
        <div className="row top-margin">
          <div className="col">
            <Link to="/dashboard" className="btn btn-sm btn-outline-primary"><i className="fa-solid fa-left-long"></i> Retour</Link>
            <h3 className="mt-4">{project.projectName}</h3>
          </div>
        </div>
        
      }
    </>
    
  )
}

export default Project;