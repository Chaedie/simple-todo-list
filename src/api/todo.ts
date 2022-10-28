import { http } from './api';

export async function getTodoList() {
  try {
    const res = await http.get('/todos');
    if (res.status === 200) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function postTodo(bodyData: { todo: string }) {
  try {
    const res = await http.post('/todos', bodyData);
    if (res.status === 201) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function putTodo(bodyData: { id: number; todo: string; isCompleted: boolean }) {
  try {
    const res = await http.put(`todos/${bodyData?.id}`, bodyData);
    if (res.status === 200) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function deleteTodo(bodyData: { id: number }) {
  try {
    const res = await http.delete(`/todos/${bodyData?.id}`);
    if (res.status === 204) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}
