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
  const [error, setError] = useState("")
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

  async function deleteProject(data) {
    setError("");
    if (data.projectNameDelete === data.projectNameConfirm) {
      const userDoc = doc(db, "projects", data.projectId);
      await deleteDoc(userDoc);
      navigate("/dashboard");
    }
    setError("Le nom entré ne correspond pas au nom du projet")
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
          { errors.projectName && <div className="form-text text-danger">Veuillez renseigner un nom pour modifier le projet</div> }
        </div>
        <div className="col-lg-4">
          <button className="btn btn-outline-primary w-100 mt-lg-0 mt-3" onClick={handleSubmit(updateProject)} disabled={loading}>Modifier le nom du projet</button>
        </div>
      </div>
      
      <h4 className="text-danger mt-5">Supprimer le projet</h4>
      <hr />
      <p>Une fois que vous avez supprimé votre projet, il est impossible de revenir en arrière. Soyez-en sûr.</p>
      <p>Veuillez taper <span className="font-monospace text-danger">{project.projectName}</span> pour confirmer l'action.</p>
      <div className="row">
        <div className="col-lg-8">
          <input 
            type="hidden" 
            value={ projectId }
            { ...register("projectIdDelete", { required: true }) }
          />
          <input 
            type="hidden" 
            value={ project.projectName }
            { ...register("projectNameConfirm", { required: true }) }
          />
          <input 
            type="text"
            id="projectNameDelete"
            className={ `form-control bg-dark border-secondary text-light ${ (error || errors.projectNameDelete) && "is-invalid border-danger" }` }
            placeholder={`Veuillez taper le nom du projet pour confirmer sa suppression`}
            { ...register("projectNameDelete") }
          />
          { (error) && <div className="form-text text-danger">Veuillez renseigner le nom du projet pour le supprimer</div> }
        </div>
        <div className="col-lg-4">
          <button className="btn btn-outline-danger w-100 mt-lg-0 mt-3" onClick={handleSubmit(deleteProject)}>Supprimer le projet</button>
        </div>
      </div>
      </>
    }
    
    </>
  )
};

export default ProjectDocuments;