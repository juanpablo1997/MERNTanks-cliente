// DEPENDENCIAS DEL COMPONENTE proyectoState:
import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

// COMPONENTES COMPLEMENTARIOS:
import ProyectoContext from "./ProyectoContext";
import ProyectoReducer from "./ProyectoReducer";

// TYPS:
import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Once:17" },
    { id: 2, nombre: "Cidenet" },
    { id: 3, nombre: "Sofka" },
    { id: 4, nombre: "Codex" },
  ];

  const initialState = {
    // Arreglo almuadilla:
    proyectos: [],
    formulario: false,
    errorformulario: false,
    proyectoseleccionado: null
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  // Serie de funciones para el CRUD:

  /*
    --------------------------------------------------------- 
    Muestra el formulario para colocar nombre al proyecto 
    y agregarlo al hacer click en "nuevo proyecto".
  */
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  /* 
    ---------------------------------------------------------
    Obtiene los proyectos.
  */
  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  /* 
    ---------------------------------------------------------
    Agrega un id al proyecto que se va a crear
    luego lo agrega al arreglo de objetos que 
    almacena los proyectos llamado "proyectos".
  */
  const agregarProyecto = (proyecto) => {
    // Agrega un ID al proyecto:
    proyecto.id = uuidv4();

    // Insertar el proyecto en el state:
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  /* 
    ---------------------------------------------------------
    Muestra un error al no poner un nombre al proyecto
    e intentar agregarlo.
  */
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  /* 
    ---------------------------------------------------------
    Al seleccionar un proyecto se debe cambiar el nombre
    en la parte principal.
  */
  const proyectoActual = (proyectoId) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyectoId
    });
  };
  
  /* 
    ---------------------------------------------------------
    Elimina un proyecto almacenado en arreglo que contiene
    los proyectos cuando el usuario seleccione la opción.
  */
  const eliminarProyecto = (proyectoId) => {
    dispatch({
      type: ELIMINAR_PROYECTO,
      payload: proyectoId
    });
  };
  
  return (
    <ProyectoContext.Provider
      value={{
        // States:
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        proyectoseleccionado: state.proyectoseleccionado,

        // Funciones:
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
        mostrarError,
        proyectoActual,
        eliminarProyecto
      }}
    >
      {props.children}
    </ProyectoContext.Provider>
  );
};

export default ProyectoState;
