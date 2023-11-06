import { useEffect, useState } from "react";


function PostList(props) {
    const [listOfPosts, setListOfPosts] = useState();
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
          console.log(data);
          setListOfPosts(data);
          }
          getData();
        }, []); 
    };
    const postsJSX = listOfPosts.map((singlePost) => {});

    return <div>Hello from PostList!</div>;








export default PostList;