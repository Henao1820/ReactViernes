import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function FormularioGastos() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Gastos</h2>
      <div className="border rounded p-4 shadow" style={{ maxWidth: '500px', margin: 'auto' }}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Label>Producto</Form.Label>
              <Form.Control type="text" placeholder="Ingresa nombre del producto" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMonto">
              <Form.Label>Monto</Form.Label>
              <Form.Control type="number" placeholder="Ingresa el monto" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridDescripcion">
            <Form.Label>Descripción</Form.Label>
            <Form.Control type="text" placeholder="Ingresa una descripción" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        {/* Enlace para navegar al nuevo formulario */}
        <Button variant="link" className="mt-3">
          <Link to="/metodo-pago">Ir al Método de Pago</Link>
        </Button>
      </div>
    </div>
  );
}

export default FormularioGastos;
