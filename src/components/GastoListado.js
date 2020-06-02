import React from 'react';
import PropTypes from 'prop-types';
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

GastoListado.propTypes = {
  gastos: PropTypes.array.isRequired
};

export default GastoListado;