import { useState, useEffect } from "react";

function Comment() {
    const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Bonjour");
    async function getData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/comments/1");
      const data = await response.json();
    console.log(data);
    setComment(data);
    setLoading(false);
    }
    getData();
  }, []);
    return (
        <>
        {loading == true ?(
            
            <p>loading</p>
        ):(<p>{comment.name}
        {comment.email}
        {comment.body}
        </p>
        )}
        
        </>
    )
}

export default Comment;