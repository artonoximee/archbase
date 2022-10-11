import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function ProjectForm() {
  const { currentUser } = useAuth();
  const projectsCollectionRef = collection(db, "projects");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  async function createProject(data) {
    await addDoc(projectsCollectionRef, {projectName: data.projectName, userId: currentUser.uid});
    navigate("/dashboard");
  }

  return (
    <>
      <div className="row justify-content-center align-items-start mt-5">
        <div className="col-lg-7">
          <input 
            type="text"
            id="projectName"
            className={ `form-control bg-dark border-secondary text-light ${ errors.projectName && "is-invalid border-danger" }` }
            placeholder="Ajouter un projet"
            { ...register("projectName", { required: true }) }
          />
          { errors.projectName && <div className="form-text text-danger">Merci de renseigner un nom pour créer un nouveau projet</div> }
        </div>
        <div className="col-lg-1">
          <button className="btn btn-outline-primary" onClick={ handleSubmit(createProject) } type="submit"><i className="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </>
  )
};

export default ProjectForm;