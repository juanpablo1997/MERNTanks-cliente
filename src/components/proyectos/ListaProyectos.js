// DEPENDENCIAS DEL COMPONENTE ListaProyectos:
import React, { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// COMPONENTES COMPLEMENTARIOS:
import Proyecto from "./Proyecto";

// COMPONENTES CONTEXT:
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const ListaProyectos = () => {
  // Obten el state de los proyectos:
  const ProyectosContext = useContext(ProyectoContext);

  // Context:
  const { proyectos, obtenerProyectos } = ProyectosContext;

  // Obten los proyectos después de cargar el componente
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Revisa si proyectos tiene contenido
  if (proyectos.length === 0) {
    return <p>No hay proyectos, comienza creando uno</p>;
  }

  return (
    <>
      <ul className="listado-proyectos">
        <TransitionGroup>
          {proyectos.map((proyecto) => (
            <CSSTransition
              key={proyecto.id}
              timeout={400}
              classNames="proyecto"
            >
              <Proyecto proyecto={proyecto} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </>
  );
};

export default ListaProyectos;
