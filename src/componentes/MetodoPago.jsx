import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function MetodoPago() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Método de Pago</h2>
      <div className="border rounded p-4 shadow" style={{ maxWidth: '500px', margin: 'auto' }}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridMetodo">
              <Form.Label>Método de Pago</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecciona un método</option>
                <option value="1">Efectivo</option>
                <option value="2">Bancolombia</option>
                <option value="3">Nequi</option>
                <option value="4">PSE</option>
                <option value="5">Débito/Crédito</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" placeholder="Ingresa una descripción" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridFotoIcono">
            <Form.Label>Foto/Icono</Form.Label>
            <Form.Control type="text" placeholder="Ingresa la URL de la foto o icono" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridEntidad">
            <Form.Label>Entidad</Form.Label>
            <Form.Control type="text" placeholder="Ingresa la entidad" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
           {/* Botón para navegar a la página de categoría */}
           <Button variant="link" className="mt-3">
            <Link to="/categoria">Ir a Categoría</Link>
            </Button>
        </Form>
      </div>
    </div>
  );
}

export default MetodoPago;
