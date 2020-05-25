import React, { useState } from 'react';

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);

  // Cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();

    // Validar

    // Construir el gasto

    // Pasar el gasto al componente principal

    // Resetear el formulario
    
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aquí</h2>
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