import ToDo from "./ToDo";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import Post from "./Post";
import PostList from "./PostList";

function App() {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState({});
  const [post, setPost] = useState({});
  useEffect(() => {
    console.log("Bonjour");
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/53");
      const data = await response.json();
    console.log(data);
    setPost(data);
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
    {loading ? <p>Ladejas...</p> : <Comment {...comment} />}

    </div>

    
  );
}

export default App;
