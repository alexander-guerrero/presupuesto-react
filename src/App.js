import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import GastoListado from './components/GastoListado';

function App() {

  // Definir el State
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);

  // Guardar los gastos
  const guardarGastos = gasto => {
    setGastos([...gastos, gasto]);
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
              </div>
            </div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
