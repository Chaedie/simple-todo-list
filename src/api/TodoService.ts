import { http } from './api';

const TodoService = {
  get: async function () {
    try {
      const res = await http.get('/todos');
      if (res.status === 200) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },

  post: async function (bodyData: { todo: string }) {
    try {
      const res = await http.post('/todos', bodyData);
      if (res.status === 201) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },

  put: async function (bodyData: { id: number; todo: string; isCompleted: boolean }) {
    try {
      const res = await http.put(`todos/${bodyData?.id}`, bodyData);
      if (res.status === 200) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },

  delete: async function (bodyData: { id: number }) {
    try {
      const res = await http.delete(`/todos/${bodyData?.id}`);
      if (res.status === 204) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
    }
  },
};
export default TodoService;
