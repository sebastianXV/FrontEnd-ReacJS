import { Card, Container, Button, Col, Form, Row } from "react-bootstrap"; // Importa los componentes de react-bootstrap
import "./edit.css";
import { useEffect, useState } from "react"; // Importa useEffect y useState de React
import { listarGeneros } from "../../../api/genero"
import { listarDirectores } from "../../../api/director";
import { listarProductoras } from "../../../api/productora"
import { listarTipos } from "../../../api/tipo";
import { postMedia } from "../../../api/media";


export const CreateMedia = () => {

    const [form, setForm] = useState({
        serial: "",
        titulo: "",
        sinopsis: "",
        imagenPortada: "",
        urlPelicula: "",
        anioEstreno: "",
        generoPrincipal: "",
        directorPrincipal: "",
        productora: "",
        tipo: ""

    });

    const [generos, setGeneros] = useState([])
    const [directores, setDirectores] = useState([]);
    const [productoras, setProductoras] = useState([]);
    const [tipos, setTipos] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const generosData = await listarGeneros();
                const directoresData = await listarDirectores();
                const productorasData = await listarProductoras();
                const tiposData = await listarTipos();

                setGeneros(generosData);
                setDirectores(directoresData);
                setProductoras(productorasData);
                setTipos(tiposData);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }
        fetchData();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
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
                                    requiered
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
                                    required
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
                            <Form.Group as={Col}>
                                <Form.Label>Serial</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={form.serial}
                                    placeholder="AAABBB123"
                                    onChange={(e) => {
                                        setForm({ ...form, serial: e.target.value });
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Sinopsis</Form.Label>
                                <Form.Control
                                    requiered
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
                                <Form.Label>Portada</Form.Label>
                                <Form.Control
                                    required
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
                                    required
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
                                    required
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
                                    required
                                    value={form.tipo}
                                    onChange={(e) => setForm({ ...form, tipo: e.target.value })}>
                                    {tipos.map((tipo) => (
                                        <option key={tipo._id} value={tipo._id}>
                                            {tipo.nombre}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Año de estreno</Form.Label>
                                <Form.Control
                                    required
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
                        <Card.Img variant="top" src={form.imagenPortada} alt="portada"/>
                        <Card.Body>
                            <Card.Title className="align-center">{form.titulo}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">{form.anioEstreno}</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row >

        </Container >
    );
};
