
function Post(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>userId: {props.userId}</p>
      <p>id: {props.id}</p>
      <p>props: {props.body}</p>
    </article>
  );
   
}

export default Post;