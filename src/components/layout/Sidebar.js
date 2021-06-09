// DEPENDENCIAS DEL COMPONENTE Sidebar:
import React from "react";

// COMPONENTES COMPLEMENTARIOS:
import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListaProyectos from "../proyectos/ListaProyectos";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>

      <NuevoProyecto />

      <div className="proyectos">
        <h2>Tus proyectos</h2>
        <ListaProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
