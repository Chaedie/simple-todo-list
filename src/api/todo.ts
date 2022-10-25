import { http, getAuthorization } from './api';

export async function getTodoList(token: string | null) {
  try {
    const res = await http.get('/todos', { headers: getAuthorization(token) });
    if (res.status === 200) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}
export async function postTodo(token: string | null, bodyData: { todo: string }) {
  try {
    const res = await http.post('/todos', bodyData, { headers: getAuthorization(token) });
    if (res.status === 201) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function putTodo(token: string | null, bodyData: { id: number; todo: string; isCompleted: boolean }) {
  try {
    const res = await http.put(`todos/${bodyData?.id}`, bodyData, { headers: getAuthorization(token) });
    if (res.status === 200) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}

export async function deleteTodo(token: string | null, bodyData: { id: number }) {
  try {
    const res = await http.delete(`/todos/${bodyData?.id}`, { headers: getAuthorization(token) });
    if (res.status === 204) return res.data;

    throw new Error('API통신 실패');
  } catch (error: any) {
    console.error(error.message);
  }
}
