import React from 'react';
import Gasto from './Gasto';

const GastoListado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Lista de gastos</h2>
    <ul>
      {gastos.map(gasto => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
        />
      ))}
    </ul>
  </div>
);

export default GastoListado;