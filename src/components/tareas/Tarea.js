// DEPENDENCIAS DEL COMPONENTE Tarea:
import React, { useContext } from "react";

// COMPONENTES CONTEXT:
import TareaContext from "../../context/tareas/TareaContext";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const Tarea = ({ tarea }) => {
  // Obtenemos el state de tarea:
  const TareasContext = useContext(TareaContext);
  const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = TareasContext;

  // Obtenemos el state del formulario si un proyecto está activo:
  const ProyectosContext = useContext(ProyectoContext);
  const { proyectoseleccionado } = ProyectosContext;

  // Desestructura el Array "proyectoseleccionado" para optener la posición:
  const [proyectoActualPosicion] = proyectoseleccionado;

  // Funcion que se ejecuta cuando el usuario presiona el btn eliminar.
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActualPosicion.id);
  };

  // Funcion que modifica el estado de la tarea:
  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    cambiarEstadoTarea(tarea);
  };

  // Función que selecciona una tarea para editarla:
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado ? (
          <button 
            type="button" 
            className="completo"
            onClick={() => cambiarEstado(tarea)}></button>
        ) : (
          <button 
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}></button>
        )}
      </div>

      <div className="acciones">
        <button 
          type="button" 
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}>
          Editar
        </button>

        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
