import { axiosConfiguration } from '../configuration/axios';


export const postGeneros = async (generosData) => {
  try {
    const response = await axiosConfiguration.post('generos', generosData);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error al crear el recurso. error:', error);
  }
};


export const listarGeneros = async () => {
  try {
    const response = await axiosConfiguration.get('generos');
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error('Error al obtener los géneros:', error);
  }
};

