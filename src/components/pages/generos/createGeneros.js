import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { postGeneros } from "../../../api/genero";
import { useState } from "react";

export const CreateGeneros = () => {

    const [form, setForm] = useState({
        nombre: '',
        descripcion: ''
    })

    const resetForm = () => {
        setForm({
            nombre: '',
            descripcion: ''
        });
      };


    const handleSubmit = async (event) => {

        event.preventDefault();
        
        try {
            const response = await postGeneros(form)
            console.log("genero creado ", response.status)
            resetForm()
        }
        catch (error) {
            console.log("ocurrio un error", error)
        }
    }
    return (
        <Container >
            <Row>
                <h2 className="tittle">Crear Género</h2>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} md={6} className="mb-3">
                    <Form
                        data-bs-theme="dark"
                        onSubmit={(e) => handleSubmit(e)}>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    requiered
                                    placeholder="Terror"
                                    value={form.nombre}
                                    onChange={(e) => {
                                        setForm({ ...form, nombre: e.target.value });
                                    }}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    requiered
                                    as="textarea"
                                    aria-label="Con área de texto"
                                    type="text"
                                    value={form.descripcion}
                                    placeholder="Descripcion del Género"
                                    onChange={(e) => {
                                        setForm({ ...form, descripcion: e.target.value });
                                    }}
                                />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}