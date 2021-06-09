// DEPENDENCIAS DEL COMPONENTE Proyecto:
import React, { useContext } from "react";

// COMPONENTES CONTEXT:
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareaContext from "../../context/tareas/TareaContext";

const Proyecto = ({proyecto}) => {
  // Obtenemos el state de proyecto:
  const ProyectosContext = useContext(ProyectoContext);
  const { proyectoActual } = ProyectosContext; 
 
  // Obtener el state de tarea:
  const TareasContext = useContext(TareaContext);
  const { obtenerTareas } = TareasContext;

  // Función para agregar el proyecto actual:
  const seleccionarProyecto = (id) =>{
    proyectoActual(id); // Establece el proyecto que esta seleccionado
    obtenerTareas(id); // Filtra las tareas cuando se de click
  };

  return (
    <li>
      <button 
        type="button" 
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
