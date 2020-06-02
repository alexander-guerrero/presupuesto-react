export const verificarPresupuesto = (presupuesto, restante) => {
  let alertClase;

  if (restante / presupuesto < 0.25) {
    alertClase = 'alert alert-danger';
  } else if (restante / presupuesto < 0.5) {
    alertClase = 'alert alert-warning';
  } else {
    alertClase = 'alert alert-success';
  }
  
  return alertClase;
};