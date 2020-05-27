import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({ guardarGastos }) => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // Cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();

    // Validar
    if (cantidad <= 0 || isNaN(cantidad) || nombre.trim() === '') {
      setError(true);
      return;
    }

    // Si pasa la validación
    setError(false);

    // Construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    };

    // Pasar el gasto al componente principal
    guardarGastos(gasto);

    // Resetear el formulario
    setNombre('');
    setCantidad(0);
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aquí</h2>

      {error
        ?
        <Error
          mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto :("
        />
        :
        null}

      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ejm: Transporte"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ejm: 70"
          value={cantidad}
          onChange={e => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
}

export default Formulario;