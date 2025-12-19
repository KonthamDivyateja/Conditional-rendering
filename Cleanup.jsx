import React, { useState, useEffect } from "react";

const TodoCard = ({ userId, title, completed }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "5px", padding: "10px" }}>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Status:</strong> {completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 15));
      });

    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard 
          key={todo.id} 
          userId={todo.userId} 
          title={todo.title} 
          completed={todo.completed} 
        />
      ))}
    </div>
  );
};

const App = () => {
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "Unmount Todos" : "Mount Todos"}
      </button>
      {showTodos && <TodoList />}
    </div>
  );
};

export default App;