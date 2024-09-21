export interface TodoResponse {
  todos: TodoType[];
}

export interface TodoType {
  title: string;
  completed: boolean;
  userId: number;
  id: number;
}

export const fetchTodo = () => {
  return {
    todos: [
      { title: "가나다", completed: false, userId: 1, id: 1 },
      { title: "가가가", completed: true, userId: 2, id: 2 },
      { title: "나나나", completed: false, userId: 3, id: 3 },
      { title: "다다다", completed: false, userId: 4, id: 4 },
    ],
  };
};
