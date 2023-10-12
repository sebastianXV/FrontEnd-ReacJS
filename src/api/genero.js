import { axiosConfiguration } from '../configuration/axios';

export const listarGeneros = async () => {
  try {
    const response = await axiosConfiguration.get('generos');

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

