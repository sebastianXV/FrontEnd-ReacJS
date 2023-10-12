import { Card, Container, Button, Col, Form, Row } from "react-bootstrap"; // Importa los componentes de react-bootstrap
import "./edit.css";
import { useEffect, useState } from "react"; // Importa useEffect y useState de React
import { listarGeneros } from "../../api/genero"
import { listarDirectores } from "../../api/director";
import { listarProductoras } from "../../api/productora"
import { postMedia } from "../../api/media";


export const CreateMedia = () => {

    const [form, setForm] = useState({
        serial: "abcd1244",
        titulo: "",
        sinopsis: "",
        imagenPortada: "",
        urlPelicula: "https:/elviaje.com",
        anioEstreno: "",
        generoPrincipal: "",
        directorPrincipal: "",
        productora: "",
        tipo: ""

    });

    const [generos, setGeneros] = useState([])
    const [directores, setDirectores] = useState([]);
    const [productoras, setProductoras] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const generosData = await listarGeneros();
                const directoresData = await listarDirectores();
                const productorasData = await listarProductoras();

                setGeneros(generosData);
                setDirectores(directoresData);
                setProductoras(productorasData);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(form)

        try {
            console.log('Enviando solicitud POST para crear película:', form);
            const peliculaCreada = await postMedia(form);
            console.log('Película creada con éxito:', peliculaCreada);
        } catch (error) {
            console.error('Error al crear la película:', error);
        }
    };

    return (
        <Container>
            <Row>
                <h2 className="tittle">Crear Película</h2>
            </Row>

            <Row>
                <Col xs={12} md={6} className="mb-3">
                    <Form
                        data-bs-theme="dark"
                        onSubmit={(e) => handleSubmit(e)}>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="El título"
                                    value={form.titulo}
                                    onChange={(e) => {
                                        setForm({ ...form, titulo: e.target.value });
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Género</Form.Label>
                                <Form.Select
                                    value={form.generoPrincipal}
                                    onChange={(e) => setForm({ ...form, generoPrincipal: e.target.value })}
                                >
                                    <option key="default" value="">
                                        Elegir...
                                    </option>
                                    {generos.map((genero) => (
                                        <option key={genero._id} value={genero._id}>
                                            {genero.nombre}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Sinopsis</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    aria-label="Con área de texto"
                                    type="text"
                                    value={form.sinopsis}
                                    placeholder="Resumen corto de la película"
                                    onChange={(e) => {
                                        setForm({ ...form, sinopsis: e.target.value });
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-1">
                            <Form.Group as={Col}>
                                <Form.Label> </Form.Label>
                                <Form.Control
                                    type="url"
                                    value={form.imagenPortada}
                                    placeholder="URL"
                                    onChange={(e) => {
                                        setForm({ ...form, imagenPortada: e.target.value });
                                    }}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Director</Form.Label>
                                <Form.Select
                                    value={form.directorPrincipal}
                                    onChange={(e) => setForm({ ...form, directorPrincipal: e.target.value })}
                                >
                                    <option key="default" value="">
                                        Elegir...
                                    </option>
                                    {directores.map((director) => (
                                        <option key={director._id} value={director._id}>
                                            {director.nombres}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>


                            <Form.Group as={Col}>
                                <Form.Label>Productora</Form.Label>
                                <Form.Select
                                    value={form.productora}
                                    onChange={(e) => setForm({ ...form, productora: e.target.value })}
                                >
                                    <option key="default" value="">
                                        Elegir...
                                    </option>
                                    {productoras.map((productora) => (
                                        <option key={productora._id} value={productora._id}>
                                            {productora.nombre}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Tipo de Media</Form.Label>
                                <Form.Select defaultValue="Película"
                                    value={form.tipo}
                                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}>
                                    <option>Película</option>
                                    <option>Serie</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Año de estreno</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={form.anioEstreno}
                                    placeholder="2023"
                                    onChange={(e) => {
                                        setForm({ ...form, anioEstreno: e.target.value });
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Marcar" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Row>
                    </Form>
                </Col >

                <Col xs={12} md={6} className="mb-5">
                    <Card className="custom-card">
                        <Card.Img variant="top" src={form.imagenPortada} />
                        <Card.Body>
                            <Card.Title>{form.titulo}</Card.Title>
                            <Card.Text>{form.sinopsis}</Card.Text>
                        </Card.Body>
                        <Card.Footer>{}
                            <small className="text-muted">{form.anioEstreno}</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row >

        </Container >
    );
};
