import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

function ProjectDocuments() {
  const { projectId } = useParams();
  const [project, setProject] = useState();
  const navigate = useNavigate();
  
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

  async function deleteProject(id) {
    const userDoc = doc(db, "projects", id);
    await deleteDoc(userDoc);
    navigate("/dashboard");
  };

  return (
    <>
    {
      project &&
      <>
      <h4>Modifier le nom du projet</h4>
      <hr />
      <p>Nom du projet : {project.projectName}</p>
      <h4 className="text-danger mt-5">Supprimer le projet</h4>
      <hr />
      <p>Une fois que vous avez supprimé votre projet, il est impossible de revenir en arrière. Soyez-en sûr.</p>
      <button className="btn btn-outline-danger" onClick={() => deleteProject(projectId)}>Supprimer le projet</button>
      </>
    }
    
    </>
  )
};

export default ProjectDocuments;