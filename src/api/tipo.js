import { axiosConfiguration } from '../configuration/axios';

export const listarTipos = async () => {
  try {
    const response = await axiosConfiguration.get('tipo');

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al obtener los generos');
    }
  } catch (error) {
    console.error('Error al obtener los géneros:', error);
    throw error;
  }
};
