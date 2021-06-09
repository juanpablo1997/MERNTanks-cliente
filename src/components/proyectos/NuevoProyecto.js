// DEPENDENCIAS DEL COMPONENTE NuevoProyecto:
import React, { Fragment, useContext, useState } from "react";

// COMPONENTES CONTEXT:
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const NuevoProyecto = () => {
  // Obtenemos el state del formulario:
  const ProyectosContext = useContext(ProyectoContext);
  
  // Context:
  const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = ProyectosContext;

  // State para proyecto:
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  /* 
  ----------------------------------------------------------
  Función onChangeProyecto:
  
  Se ejecuta en el momento en el que el usuario escribe
  en el input. Su función es capturar todos los caracteres
  que el usuario introduce dentro del input y almacerlos en
  el objeto "proyecto".
  */
  const onChangeProyecto = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // Desestructura el objeto proyecto:
  const { nombre } = proyecto;

  /* 
  ----------------------------------------------------------
  Función onSubmitProyecto:
  
  Se ejecuta en el momento en el que el usuario envía
  un proyecto.
  */
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    // 1. Valida el proyecto (Previene que se agregen registros vacíos):
    if (nombre === "") {
      mostrarError();
      return;
    }

    mostrarError();

    // 2. Agregar el State:
    agregarProyecto(proyecto);

    // 3. Reiniciar el form:
    setProyecto({
      nombre: ""
    });
  };

  return (
    <Fragment>
      <button 
        type="button" 
        className="btn btn-block btn-primario" 
        onClick={() => mostrarFormulario()}>
        Nuevo Proyecto
      </button>

      {formulario ? (
        <form onSubmit={onSubmitProyecto} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type="submit"
            className="btn btn-block btn-primario"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {/* Evalua si la funcion errorformulario es true o false */}
      {errorformulario ? (<p className="mensaje advertencia">El nombre del proyecto es obligatorio</p>): null}

    </Fragment>
  );
};

export default NuevoProyecto;
