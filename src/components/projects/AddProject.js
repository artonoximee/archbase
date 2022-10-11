import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

function ProjectForm(props) {
  const { currentUser } = useAuth();
  const projectsCollectionRef = collection(db, "projects");
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { onReload } = props;

  async function createProject(data) {
    await addDoc(projectsCollectionRef, {projectName: data.projectName, userId: currentUser.uid});
    reset({projectName: ""})
    onReload();
  }

  return (
    <>
      <div className="row justify-content-center align-items-start mt-5 mb-5">
        <div className="col-10">
          <input 
            type="text"
            id="projectName"
            className={ `form-control form-control-lg bg-dark border-secondary text-light ${ errors.projectName && "is-invalid border-danger" }` }
            placeholder="Ajouter un projet"
            { ...register("projectName", { required: true }) }
          />
          { errors.projectName && <div className="form-text text-danger">Merci de renseigner un nom pour créer un nouveau projet</div> }
        </div>
        <div className="col-2 text-end">
          <button className="btn btn-lg btn-primary w-100" onClick={ handleSubmit(createProject) } type="submit"><i className="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </>
  )
};

export default ProjectForm;