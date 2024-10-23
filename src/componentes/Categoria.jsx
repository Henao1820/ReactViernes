import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Categoria() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Categoría</h2>
      <div className="border rounded p-4 shadow" style={{ maxWidth: '500px', margin: 'auto' }}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNombreCategoria">
              <Form.Label>Nombre de la Categoría</Form.Label>
              <Form.Control type="text" placeholder="Ingresa el nombre de la categoría" />
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

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        {/* Botón para navegar a la página de factura */}
        <Button variant="link" className="mt-3">
            <Link to="/factura">Ir a Factura</Link>
          </Button>
      </div>
    </div>
  );
}

export default Categoria;
