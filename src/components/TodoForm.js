import React, { useState } from "react";
import { useTodos } from "../redux/ducks/todos";
export default function(props) {
  const { add } = useTodos();
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    add(todo);
    setTodo("");
  }

  return (
    <div className="container">
      <div className="todos">
        <span>
          WRITE your list and simply mark as <br />
          1. COMPLETED ( click on name ) <br />
          2. DELETE ( click on x )
        </span>
      </div>

      <div className="wrap">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="What needs to be done?"
            className="input"
            type="text"
            onChange={e => setTodo(e.target.value)}
            value={todo}
          />
        </form>
      </div>
    </div>
  );
}
