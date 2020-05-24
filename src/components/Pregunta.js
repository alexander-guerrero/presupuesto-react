import React, { Fragment, useState } from 'react';

const Pregunta = () => {

  // Definir el state
  const [cantidad, setCantidad] = useState(0);

  // Función que lee el presupuesto
  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value, 10));
  }

  // Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    // Validar...

    // Si pasa la validación...
    
  }

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      <form
        onSubmit={agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto. Ejm: 1500"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
}

export default Pregunta;