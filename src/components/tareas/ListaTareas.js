// DEPENDENCIAS DEL COMPONENTE ListaTarea:
import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// COMPONENTES COMPLEMENTARIOS:
import Tarea from "../tareas/Tarea";

// COMPONENTES COMPLEMENTARIOS:
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const ListaTareas = () => {
  // Obten el state de los proyectos:
  const ProyectosContext = useContext(ProyectoContext);
  const { proyectoseleccionado, eliminarProyecto } = ProyectosContext;

  // Obten el state de las tareas:
  const TareasContext = useContext(TareaContext);
  const { tareasproyecto } = TareasContext;

  // Si no hay ningun proyecto:
  if (!proyectoseleccionado) return <h2>Selecciona un proyecto</h2>;

  // Desestructura el Array "proyectoseleccionado" para optener la posición:
  const [proyectoActualPosicion] = proyectoseleccionado;

  // Función para eliminar los proyectos:
  const onClickEliminarPryecto = () => {
    eliminarProyecto(proyectoActualPosicion.id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActualPosicion.nombre} </h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition
                Key={tarea.id} 
                timeout={200} 
                classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminarPryecto}
      >
        Eliminar proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListaTareas;
