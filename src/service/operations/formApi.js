import { apiConnector } from '../apiConnector';
import { bookingformEndpoints } from '../api';

const { GET_ALL_FORMS, GET_FORM_BY_ID, CREATE_FORM, UPDATE_FORM, DELETE_FORM } =
  bookingformEndpoints;

// Fetch all forms
export const getAllForms = async (token) => {
  try {
    const response = await apiConnector('GET', GET_ALL_FORMS, null, {
      Authorization: `Bearer ${token}`,
    });

    console.log('Get All Forms API Response:', response);
    return response.data;
  } catch (error) {
    console.error('Get All Forms API Error:', error);
    return [];
  }
};

// Fetch a form by ID
export const getFormById = async (token, id) => {
  try {
    const response = await apiConnector('GET', GET_FORM_BY_ID(id), null, {
      Authorization: `Bearer ${token}`,
    });

    console.log('Get Form By ID API Response:', response);
    return response.data;
  } catch (error) {
    console.error('Get Form By ID API Error:', error);
  }
};

// Create a new form
export const createForm = async (token, data) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data', // Supports file uploads
    };

    const response = await apiConnector('POST', CREATE_FORM, data, headers);

    console.log('Create Form API Response:', response);
    return response.data;
  } catch (error) {
    console.error('Create Form API Error:', error);
  }
};

// Update a form
export const updateForm = async (token, id, data) => {
  try {
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data', // Supports file uploads
    };

    const response = await apiConnector('PUT', UPDATE_FORM(id), data, headers);

    console.log('Update Form API Response:', response);
    return response.data;
  } catch (error) {
    console.error('Update Form API Error:', error);
  }
};

// Delete a form
export const deleteForm = async (token, id) => {
  try {
    const response = await apiConnector('DELETE', DELETE_FORM(id), null, {
      Authorization: `Bearer ${token}`,
    });

    console.log('Delete Form API Response:', response);
    return response.data;
  } catch (error) {
    console.error('Delete Form API Error:', error);
  }
};
