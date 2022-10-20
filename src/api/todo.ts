import { http } from './api';

export const todoAPI = {
  getTodoList: async function (token: string | null) {
    try {
      const res = await http.get('/todos', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 200) {
        return res.data;
      }
      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },

  postTodo: async (token: string | null, bodyData: { todo: string }) => {
    try {
      const res = await http.post('/todos', bodyData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 201) {
        return res.data;
      }
      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },

  putTodo: async (token: string | null, bodyData: { id: number; todo: string; isCompleted: boolean }) => {
    try {
      const res = await http.put(`todos/${bodyData?.id}`, bodyData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        return res.data;
      }
      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },

  deleteTodo: async (token: string | null, bodyData: { id: number }) => {
    try {
      const res = await http.delete(`/todos/${bodyData?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 204) {
        return res.data;
      }
      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },
};
