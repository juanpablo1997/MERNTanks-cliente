// DEPENDENCIAS DEL COMPONENTE Proyectos:
import React from "react";

// COMPONENTES COMPLEMENTARIOS:
import Sidebar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";
import ListaTareas from "../tareas/ListaTareas";

const Proyectos = () => {
  return (
    <div className="contenedor-app">
      {/*Zona ubicada en la parte izquierda*/}
      <Sidebar />

      {/*Zona ubicada en la parte derecha*/}
      <div className="seccion-principal">
        <Barra />
        <main>
            <FormTarea />
            <div className="contenedor-tareas">
              <ListaTareas />
            </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
