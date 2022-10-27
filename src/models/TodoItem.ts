export interface TodoItem {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export interface TodoItemWithUserId extends TodoItem {
  userId: number;
}
