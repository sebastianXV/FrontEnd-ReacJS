import { Card, Container, Button, Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMediaByID, updateByID } from '../../../api/media';
import { listarGeneros } from "../../../api/genero";
import { listarDirectores } from "../../../api/director";
import { listarProductoras } from "../../../api/productora";
import { listarTipos } from "../../../api/tipo";


export const EditMedia = () => {

    const { id } = useParams();
    const [mediaData, setMediaData] = useState([]);
    const [generos, setGeneros] = useState([])
    const [directores, setDirectores] = useState([]);
    const [productoras, setProductoras] = useState([]);
    const [tipos, setTipos] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const generosData = await listarGeneros();
                const mediaData = await getMediaByID(id);
                const directoresData = await listarDirectores();
                const productorasData = await listarProductoras();
                const tiposData = await listarTipos();

                setGeneros(generosData);
                setDirectores(directoresData);
                setProductoras(productorasData);
                setTipos(tiposData);
                setMediaData(mediaData);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        }

        fetchData();
    }, []);



    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const mediaUpdate = await updateByID(mediaData, id);
            alert("actualizada correctamente")
            setMediaData(mediaUpdate);
        } catch (error) {
            console.error('Error en la peticion:', error);
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
                                    value={mediaData && mediaData.titulo}
                                    onChange={(e) => {
                                        setMediaData({ ...mediaData, titulo: e.target.value });
                                    }}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Género</Form.Label>
                                <Form.Select
                                    required
                                    value={mediaData && mediaData.generoPrincipal}
                                    onChange={(e) => setMediaData({ ...mediaData, generoPrincipal: e.target.value })}
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
                                    value={mediaData && mediaData.serial}
                                    placeholder="AAABBB123"
                                    onChange={(e) => {
                                        setMediaData({ ...mediaData, serial: e.target.value });
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
                                    value={mediaData && mediaData.sinopsis}
                                    placeholder="Resumen corto de la película"
                                    onChange={(e) => {
                                        setMediaData({ ...mediaData, sinopsis: e.target.value });
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
                                    value={mediaData && mediaData.imagenPortada}
                                    placeholder="URL"
                                    onChange={(e) => {
                                        setMediaData({ ...mediaData, imagenPortada: e.target.value });
                                    }}
                                />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>Director</Form.Label>
                                <Form.Select
                                    required
                                    value={mediaData && mediaData.directorPrincipal}
                                    onChange={(e) => setMediaData({ ...mediaData, directorPrincipal: e.target.value })}
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
                                    value={mediaData && mediaData.productora}
                                    onChange={(e) => setMediaData({ ...mediaData, productora: e.target.value })}
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
                                    value={mediaData && mediaData.tipo}
                                    onChange={(e) => setMediaData({ ...mediaData, tipo: e.target.value })}>
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
                                    value={mediaData && mediaData.anioEstreno}
                                    placeholder="2023"
                                    onChange={(e) => {
                                        setMediaData({ ...mediaData, anioEstreno: e.target.value });
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Row>
                    </Form>
                </Col >

                <Col xs={12} md={6} className="mb-5">
                    <Card className="custom-card" bg="dark" text="white">
                        <Card.Img variant="top" src={mediaData && mediaData.imagenPortada} alt="portada" />
                        <Card.Body>
                            <Card.Title className="text-center">{mediaData && mediaData.titulo}</Card.Title>
                        </Card.Body>
                        <Card.Footer text="white" className="text-center">
                            <small>{mediaData && mediaData.anioEstreno}</small>
                        </Card.Footer>
                    </Card>


                </Col>
            </Row >

        </Container >
    );
};




