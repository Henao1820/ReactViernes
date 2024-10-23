import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function GridComplexExample() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Formulario de Registro</h2>
      <div className="border rounded p-4 shadow" style={{ maxWidth: '500px', margin: 'auto' }}>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingresa tu nombre" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEdad">
              <Form.Label>Edad</Form.Label>
              <Form.Control type="number" placeholder="Ingresa tu edad" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridTelefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="tel" placeholder="Ingresa tu número de teléfono" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridCorreo">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu correo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridContrasena">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu contraseña" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFechaRegistro">
              <Form.Label>Fecha de Registro</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCiudad">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control placeholder="Ingresa tu ciudad" />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
        
        <Button variant="link" className="mt-3">
          <Link to="/nuevo-formulario">Ir a Gastos</Link>
        </Button>
      </div>
    </div>
  );
}

export default GridComplexExample;
