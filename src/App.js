import ToDo from "./ToDo";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Bonjour");
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
      const data = await response.json();
    console.log(data);
    setTodo(data);
    setLoading(false);
    }
    getData();
  }, []);
  // const [todo, setTodo] = useState({
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: true,
  // });

  return (
    <div className="App">
      <h1>bonjour</h1>
    {loading ? <p>Ladejas...</p> : <ToDo {...todo} />}
    </div>

    
  );
}

export default App;
