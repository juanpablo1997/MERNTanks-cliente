// DEPENDENCIAS DEL COMPONENTE FormTarea:
import React, { useContext, useState } from "react";

// COMPONENTES CONTEXT:
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const FormTarea = () => {
  // State local:
  const [tarea, setTarea] = useState({
    nombre: "",
  });

  // Desestructuro tarea:
  const { nombre } = tarea;

  // Obtenemos el state del formulario si un proyecto está activo:
  const ProyectosContext = useContext(ProyectoContext);
  const { proyectoseleccionado } = ProyectosContext;

  // Obtenemos el state de tarea:
  const TareasContext = useContext(TareaContext);
  const { errortarea, agregarTarea, validarTarea, obtenerTareas } = TareasContext;

  // Si no hay ningun proyecto:
  if ( !proyectoseleccionado ) return null;

  // Desestructura el Array "proyectoseleccionado" para optener la posición:
  const [proyectoActualPosicion] = proyectoseleccionado;

  // Funciones:

  // lee los valores del input:
  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value
    });
  };

  // Agregar una nueva tarea:
  const onSubmit = (e) => {
    e.preventDefault();

    // Valida el input:
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    /* Pasa la validación: al agregar una tarea valida 
    se resetea el error en false  */

    // Agrega la nueva tarea:
    tarea.proyectoId = proyectoActualPosicion.id;
    tarea.estado = false;
    agregarTarea(tarea);

    // Obtenemos la nueva tarea en el render:
    obtenerTareas(proyectoActualPosicion.id);

    // Reinicar el form:
    setTarea({
      nombre: ""
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
            <input 
                type="text"
                className="input-text"
                placeholder="Nombre tarea..."
                name="nombre"
                value={nombre}
                onChange={handleChange}
            />
        </div>

        <div className="contenedor-input">
            <input 
                type="submit"
                className="btn btn-primario btn-submit btn-block"
                value="Agregar Tarea"
            />
        </div>
      </form>
      {errortarea ? (<p className="mensaje advertencia">¿Intentas agregar una tarea sin nombre? Recuerda que debes nombrar la tarea sino como vas a recordarla</p>) : null}
    </div>
  ); 
};

export default FormTarea;
