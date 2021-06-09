import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types";

const ProyectoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };

    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorformulario: false,
      };

    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true,
      };

    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyectoseleccionado: state.proyectos.filter(
          (proyecto) => proyecto.id === action.payload
        ),
      };

    case ELIMINAR_PROYECTO:
      return {
        ...state,
        // Traeme los que no son iguales al Id:
        proyectos: state.proyectos.filter(
          (proyecto) => proyecto.id !== action.payload
        ),
        proyectoseleccionado: null,
      };

    default:
      return state;
  }
};

export default ProyectoReducer;