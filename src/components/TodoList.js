import React from "react"
import { useTodos } from "../redux/ducks/todos"

export default function(props) {
  const { todos, remove, toggle } = useTodos()

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li
            id="todoItem"
            className={todo.completed ? "completed" : ""}
            key={"todo" + todo.id}
            onClick={e => toggle(todo.id)}
          >
            <p>{todo.title}</p>
            <p className="removex">
              <button className="removethe" onClick={e => remove(todo.id)}>
                X
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
