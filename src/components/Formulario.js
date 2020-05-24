import React from 'react';

const Formulario = () => {
  return ( 
    <form>
      <h2>Agrega tus gastos aquí</h2>
      <div className="campo">
        <label>Nombre del gasto</label>
        <input 
          type="text"
          className="u-full-width"
          placeholder="Ejm: Transporte"
        />
      </div>
      <div className="campo">
        <label>Cantidad del gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ejm: 70"
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