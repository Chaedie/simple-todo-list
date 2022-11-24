import { http } from '.';

export const TodoService = {
  async getTodos() {
    try {
      const res = await http.get(URLS.todos);
      if (res.status === 200) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
      throw new Error();
    }
  },

  async createTodo(todo: string) {
    try {
      const res = await http.post(URLS.todos, { todo });
      if (res.status === 201) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
      throw new Error();
    }
  },

  async updateTodo(id: number, todo: string, isCompleted: boolean) {
    try {
      const url = `${URLS.todos}/${id}`;
      const res = await http.put(url, { id, todo, isCompleted });
      if (res.status === 200) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
      throw new Error();
    }
  },

  async deleteTodo(id: number) {
    try {
      const url = `${URLS.todos}/${id}`;
      const res = await http.delete(url);
      if (res.status === 204) return res.data;

      throw new Error('API통신 실패');
    } catch (error: any) {
      console.error(error.message);
      throw new Error();
    }
  },
};

const URLS = {
  todos: '/todos',
};
