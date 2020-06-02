import React, { Fragment } from 'react';
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

export default PresupuestoControl;