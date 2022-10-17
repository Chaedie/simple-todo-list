export interface TodoItem {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
export interface TodoItemWithoutUserId {
  id: number;
  todo: string;
  isCompleted: boolean;
}
