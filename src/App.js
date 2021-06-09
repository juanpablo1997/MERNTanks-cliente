// DEPENDENCIAS:
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTES:
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";

// PROYECTOSTATE:
import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Login} />
            <Route exact={true} path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact={true} path="/proyectos" component={Proyectos} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
