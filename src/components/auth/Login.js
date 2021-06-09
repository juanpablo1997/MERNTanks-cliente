// DEPENDENCIAS DEL COMPONENTE Login:
import React, { useState } from "react";
import { Link } from "react-router-dom";

/* 
---------------------------------------------------------- 
Funcionalidad del componente:

Cuando el usuario visite esta página, desde login podrá
ingresar su correo electronico y su password para iniciar
sesión y poder de ese modo administrar sus proyectos y sus
tareas.
*/
const Login = () => {
  // State para iniciar sesión:
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  // Desestructura el usuario:
  const { email, password } = usuario;

  /* 
  ----------------------------------------------------------
  Función onChange:
  
  Se ejecuta en el momento en el que el usuario escribe
  en el input. Su función es capturar todos los caracteres
  que el usuario introduce dentro del input y almacerlos en
  el objeto "usuario".
  */
  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  /* 
  ----------------------------------------------------------
  Función onSubmit:
  
  Se ejecuta en el momento en el que el usuario presione el
  botón "Iniciar Sesión". Su función es...
  */
  const onSubmit = (e) => {
    e.preventDeafault();

    // Valida los campos:

    // Pásalo al action:
    
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu email"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>

        {/* Envia al usuario a esta página si no tiene una cuenta */}
        <Link to="/nueva-cuenta" className="enlace-cuenta">
          ¡No tengo una cuenta!. Ir a Crear una cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
