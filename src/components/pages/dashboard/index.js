import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const Dashboard = () => {


    return (

        <Container>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className='mb-4'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Géneros</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">
                                Editar
                            </Button>
                        </div>
                    </Card>

                    <Card className='mb-4'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Productoras</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg">
                                Editar
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card className='mb-4'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Directores</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                Editar
                            </Button>
                        </div>
                    </Card>
                    <Card className='mb-4'>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Media</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                        <div className="">
                            <Link to="/dashboard/createMedia">
                                <Button variant="primary" size="lg">
                                    Crear
                                </Button>
                            </Link>

                            <Link to="/dashboard/adminRecurses">  {/* Cambio en esta línea */}
                                <Button variant="primary" size="lg">
                                    Administrar
                                </Button>
                            </Link>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container >
    );
};

export default Dashboard;
