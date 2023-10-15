import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { deleteMedia, listarMedia } from "../../../api/media";
import { Button, Container } from "react-bootstrap";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export const AdminRecurses = () => {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mediaData = await listarMedia();
                setMedia(mediaData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        console.log("lo dije", id)
        try {
            await deleteMedia(id);
            setMedia(media.filter(item => item._id !== id));
            console.log('Película eliminada correctamente');
        } catch (error) {
            console.log('Error al eliminar la película:', error);
        }
    };
    const navigate = useNavigate();

    return (
        <Container >
            <h2>Administración de Recursos</h2>
            {media.map((medias) => (
                <Paper key={medias._id} style={{ marginBottom: '20px', padding: '10px' }}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <Img alt="complex" src={medias.imagenPortada} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={3} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div">
                                        {medias.titulo}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {medias.sinopsis}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {medias.anioEstreno}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button className="mx-1" variant="danger" onClick={() => handleDelete(medias._id)}>
                                        Eliminar
                                    </Button>
                                    <Button variant="primary" onClick={() => navigate(`/dashboard/editar/${medias._id}`)}>
                                        Editar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Container>
    );
};

export default AdminRecurses;
