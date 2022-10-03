import { baseUrl } from './api';
import { request } from '../utils';

export const API = {
  getTodoList: async function (token, bodyData = {}) {
    const uri = `${baseUrl}/todos`;
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await request(uri, options);
    return response;
  },

  postTodo: async (token, bodyData = {}) => {
    const uri = `${baseUrl}/todos`;
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    };

    const response = await request(uri, options);
    return response;
  },

  putTodo: async (token, bodyData = {}) => {
    const uri = `${baseUrl}/todos/${bodyData?.id}`;
    const options = {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    };

    const response = await request(uri, options);
    return response;
  },

  deleteTodo: async (token, bodyData = {}) => {
    const uri = `${baseUrl}/todos/${bodyData?.id}`;
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await request(uri, options);
    return response;
  },
};
