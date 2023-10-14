import { Card, Col, Container, Row } from "react-bootstrap"
import { listarMedia } from "../../../api/media"
import { useEffect, useState } from "react"
import "./body.css"

const Body = () => {

    const [peliculas, setPeliculas] = useState([])

    useEffect(() => {
        async function fetchMedia() {
            try {
                const peliculas = await listarMedia()
                setPeliculas(peliculas)
                console.log(peliculas)
            }
            catch (error) {
                console.log("Ocurrio un error", error)
            }
        }
        fetchMedia()
    }, [])


    return (<Container>
        <div className="movies">
            {peliculas.map((peliculas, idx) => (
                <Col key={peliculas._id}>
                    <Card border="dark">
                        <Card.Img variant="top" src={peliculas.imagenPortada} />
                    </Card>
                    <Card.Title className="tittle">{peliculas.titulo}</Card.Title>
                </Col>
            ))}
        </div>

    </Container>
    )
}

export default Body