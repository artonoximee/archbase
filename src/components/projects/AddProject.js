import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";

function ProjectForm() {
  const { currentUser } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <>
      <div className="row justify-content-center align-items-end mt-5">
        <div className="col-lg-7">
          {/* <label htmlFor="projectName" className="form-label">Ajouter un projet</label> */}
          <input 
            type="text"
            id="projectName"
            className={ `form-control bg-dark border-secondary text-light ${ errors.email && "is-invalid border-danger" }` }
            placeholder="Ajouter un projet"
            { ...register("project", { required: true }) }
          />
          { errors.email && <div className="form-text text-danger">Merci de renseigner votre adresse email pour vous connecter</div> }
        </div>
        <div className="col-lg-1">
          <button className="btn btn-outline-primary"><i className="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </>
  )
};

export default ProjectForm;