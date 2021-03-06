import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import GastoListado from './components/GastoListado';
import PresupuestoControl from './components/PresupuestoControl';

function App() {

  // Definir el State
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  // Guardar los gastos
  const guardarGastos = gasto => {
    // Agrega el gasto al array de gastos
    setGastos([...gastos, gasto]);

    // Actualizar el restante
    setRestante(restante - gasto.cantidad);
  };

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarPregunta
            ?
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
            :
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGastos={guardarGastos}
                />
              </div>
              <div className="one-half column">
                <GastoListado
                  gastos={gastos}
                />
                <PresupuestoControl
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
