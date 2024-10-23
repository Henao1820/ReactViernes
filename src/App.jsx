import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GridComplexExample from './componentes/Formulario'; // Componente del primer formulario
import FormularioGastos from './componentes/Gastos'; // Componente del formulario de gastos
import MetodoPago from './componentes/MetodoPago'; // Componente del nuevo formulario
import Categoria from './componentes/Categoria';
import Factura from './componentes/Factura';
function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          {/* Ruta para el formulario de registro */}
          <Route path="/" element={<GridComplexExample />} />
          {/* Ruta para el nuevo formulario de gastos */}
          <Route path="/nuevo-formulario" element={<FormularioGastos />} />
          {/* Ruta para el nuevo formulario de método de pago */}
          <Route path="/metodo-pago" element={<MetodoPago />} />
          {/* Ruta para el nuevo formulario de categoría */}
          <Route path="/categoria" element={<Categoria />} />
           {/* Ruta para el nuevo formulario de factura */}
           <Route path="/factura" element={<Factura />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
