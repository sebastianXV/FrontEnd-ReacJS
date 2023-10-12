import { axiosConfiguration } from '../configuration/axios';

export const listarMedia = async () => {
  try {
    const response = await axiosConfiguration.get('media');

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al obtener las peliculas');
    }
  } catch (error) {
    console.error('Error al obtener las peliculas y series:', error);
    throw error;
  }
};


export const postMedia = async (mediaData) => {
  try {
    const response = await axiosConfiguration.post('media', mediaData);

    if (response.status === 200) {
      return response.data; // Retorna los datos de la película creada
    } else {
      throw new Error('Error al crear la película. Código de estado: ' + response.status);
    }
  } catch (error) {
    console.error('Error al crear la película:', error);
    throw error; // Lanza el error nuevamente para que se maneje en el componente que llama a esta función
  }
};

