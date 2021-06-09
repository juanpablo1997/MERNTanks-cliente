// DEPENDENCIAS DEL COMPONENTE NuevaCuenta:
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
const NuevaCuenta = () => {
  // State para iniciar sesión:
  const [cuenta, setCuenta] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmacion: ""
  });

  // Desestructura el usuario:
  const { nombre, email, password, confirmacion } = cuenta;

  /* 
  ----------------------------------------------------------
  Función onChange:
  
  Se ejecuta en el momento en el que el usuario escribe
  en el input. Su función es capturar todos los caracteres
  que el usuario introduce dentro del input y almacerlos en
  el objeto "usuario".
  */
  const onChange = (e) => {
    setCuenta({
      ...cuenta,
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

    // Valida que la contraseña tenga 6 caracteres:

    // Valida que ambas contraseñas sean iguales:

    // Pásalo al action:
    
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear una cuenta</h1>
        <form onSubmit={onSubmit}>

        <div className="campo-form">
            <label htmlFor="nombre">Nombre usuario</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Tu nombre"
              onChange={onChange}
            />
          </div>

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
            <label htmlFor="confirmacion">Confirmar password</label>
            <input
              type="password"
              id="confirmacion"
              name="confirmacion"
              value={confirmacion}
              placeholder="Confirma tu password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Crear cuenta"
            />
          </div>
        </form>

        {/* Envia al usuario a esta página si no tiene una cuenta */}
        <Link to="/" className="enlace-cuenta">
          ¡Ya tengo una cuenta!. Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;