import React from "react";
import { useEffect, useState } from "react";
import { TodoResponse, TodoType } from "../fetch";

export default function App({ todos }: { todos: TodoResponse }) {
  useEffect(() => {
    console.log("asdffgadsfdsafads");
  }, []);

  return (
    <>
      <ul>
        {todos.todos.map((todo, index) => (
          <Todo
            key={index}
            title={todo.title}
            completed={todo.completed}
            userId={todo.userId}
            id={todo.id}
          />
        ))}
      </ul>
    </>
  );
}

function Todo({ title, completed, userId, id }: TodoType) {
  const [finished, setFinished] = useState(completed);

  function handleClick() {
    setFinished((prev) => !prev);
  }

  return (
    <li>
      <span>
        {userId}-{id}) {title}
        {finished ? "완료" : "미완료"}
        <button onClick={handleClick}>toggle</button>
      </span>
    </li>
  );
}
