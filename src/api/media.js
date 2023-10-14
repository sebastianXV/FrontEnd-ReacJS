import { axiosConfiguration } from '../configuration/axios';

export const postMedia = async (mediaData) => {
  try {
    const response = await axiosConfiguration.post('media', mediaData);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al crear el recurso, status: ' + response.status);
    }
  } catch (error) {
    console.error('Error al crear el recurso. error:', error);
    throw error;
  }
};

export const getMediaByID = async (id) => {
  try {
    const response = await axiosConfiguration.get(`media/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al obtener el recurso, status: ' + response.status);
    }
  } catch (error) {
    console.error('Error al obtener el recurso, error:', error);
    throw error;
  }
};


export const listarMedia = async () => {
  try {
    const response = await axiosConfiguration.get('media');

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al obtener los recursos, status' + response.status);
    }
  } catch (error) {
    console.error('Error al obtener los recursos, error:', error);
    throw error;
  }
};

export const updateByID = async (mediaData, id) => {
  try {
    const response = await axiosConfiguration.put(`media/${id}`, mediaData);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al actualizar el recurso: ' + response.status);
    }
  } catch (error) {
    console.error('Error al actualizar el recurso:', error);
    throw error;
  }
};


export const deleteMedia = async (id) => {
  try {
    const response = await axiosConfiguration.delete(`media/${id}`);

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Error al eliminar el recurso. ' + response.status);
    }
  } catch (error) {
    console.error('Error al eliminar el recurso:', error);
    throw error;
  }
};


