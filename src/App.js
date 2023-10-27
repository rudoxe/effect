import ToDo from "./ToDo";
import { useState } from "react";

function App() {

  const [todo, setTodo] = useState({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true,
  });

  return (
    <div className="App">
      <h1>bonjour</h1>
      <ToDo 
      userId={todo.userId}
      id={todo.id}
      title={todo.title}
      completed={todo.completed}
      />
    </div>

    
  );
}

export default App;
