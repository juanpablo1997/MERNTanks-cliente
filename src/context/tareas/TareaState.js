// DEPENDENCIAS DEL COMPONENTE TareaState:
import React, { useReducer } from "react";

// COMPONENTES COMPLEMENTARIOS:
import TareaContext from "./TareaContext";
import TareaReducer from "./TareaReducer";

// Types:
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
} from "../../types";

const TareaState = (props) => {
  // State Inicial:
  const initialState = {
    // Arreglo almuadilla:
    tareas: [
      { id: 1, proyectoId: 1, nombre: "Crear vacante", estado: true },
      { id: 2, proyectoId: 2, nombre: "Realizar entrevista", estado: false },
      {
        id: 3,
        proyectoId: 3,
        nombre: "Agendar cita con el spcicologo",
        estado: false,
      },
      { id: 4, proyectoId: 4, nombre: "Reunión", estado: true },
      { id: 5, proyectoId: 4, nombre: "Crear vacante", estado: true },
      { id: 6, proyectoId: 3, nombre: "Realizar entrevista", estado: false },
      {
        id: 7,
        proyectoId: 2,
        nombre: "Agendar cita con el spcicologo",
        estado: false,
      },
      { id: 8, proyectoId: 2, nombre: "Reunión", estado: true },
      { id: 9, proyectoId: 1, nombre: "Crear vacante", estado: true },
      { id: 10, proyectoId: 1, nombre: "Realizar entrevista", estado: false },
      {
        id: 11,
        proyectoId: 3,
        nombre: "Agendar cita con el spcicologo",
        estado: false,
      },
      { id: 12, proyectoId: 1, nombre: "Reunión", estado: true },
      { id: 13, proyectoId: 4, nombre: "Reunión", estado: true },
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null
  };

  // Dispatch para ejecutar las acciones:
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // Serie de funciones para el CRUD:

  /*
    --------------------------------------------------------- 
    Asigna cada tarea al proyecto que le 
    corresponde según su ID.
  */
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  /*
    --------------------------------------------------------- 
    Agrega un nueva tarea.
  */
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  /*
    --------------------------------------------------------- 
    Valida el formulario de tarea y muestra un error
    en caso de ser necesario.
  */
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  /*
    --------------------------------------------------------- 
    Valida el formulario de tarea y muestra un error
    en caso de ser necesario.
  */
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  /*
    --------------------------------------------------------- 
    Cambia el estado de cada tarea.
  */
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  /*
    --------------------------------------------------------- 
    Toma una tarea seleccionada para editarla.
  */
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        // State:
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,

        // Funciones:
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
