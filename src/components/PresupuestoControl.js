import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { verificarPresupuesto } from '../helpers';

const PresupuestoControl = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto: {presupuesto}
      </div>
      <div className={verificarPresupuesto(presupuesto, restante)}>
        Restante: {restante}
      </div>
    </Fragment>
  );
}

PresupuestoControl.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired
};

export default PresupuestoControl;