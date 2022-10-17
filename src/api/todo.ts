import { baseUrl } from './api';
import { request } from '../utils';
import { TodoItem } from '../models/TodoItem';

export const API = {
  getTodoList: async function (token: string | null) {
    const uri = `${baseUrl}/todos`;
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await request(uri, options);
    return response;
  },

  postTodo: async (token: string | null, bodyData: { todo: string }) => {
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

  putTodo: async (token: string | null, bodyData: { id: number; todo: string; isCompleted: boolean }) => {
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

  deleteTodo: async (token: string | null, bodyData: { id: number }) => {
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
