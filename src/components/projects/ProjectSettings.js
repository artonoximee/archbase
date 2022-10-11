import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc, deleteDoc, updateDoc } from "firebase/firestore";

function ProjectDocuments(props) {
  const { projectId } = useParams();
  const [project, setProject] = useState();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
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
  }, [loading])

  async function updateProject(data) {
    setLoading(true);
    const userDoc = doc(db, "projects", data.projectId);
    const newFields = { projectName: data.projectName };
    await updateDoc(userDoc, newFields);
    setLoading(false);
    window.location.reload();
    //navigate("/dashboard")
  };

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
      <p>Si vous souhaitez modifier le nom du projet, utilisez le formulaire ci-dessous.</p>
      <div className="row">
        <div className="col-lg-8">
          <input 
            type="hidden" 
            value={ projectId }
            { ...register("projectId", { required: true }) }
          />
          <input 
            type="text"
            id="projectName"
            className={ `form-control bg-dark border-secondary text-light ${ errors.projectName && "is-invalid border-danger" }` }
            placeholder="Modifier le nom du projet"
            defaultValue={ project.projectName }
            { ...register("projectName", { required: true }) }
          />
          { errors.projectName && <div className="form-text text-danger">Merci de renseigner un nom pour créer un nouveau projet</div> }
        </div>
        <div className="col-lg-4">
          <button className="btn btn-outline-primary w-100" onClick={handleSubmit(updateProject)} disabled={loading}>Modifier le nom du projet</button>
        </div>
      </div>
      
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