import { useState } from "react";


function ToDo(props) {
const [completed, setCompleted] = useState(props.completed)
function handleChange(e){
    setCompleted(e.target.checked)
}
    return (
        <>
        <ul>
    <li>userID: {props.userId}</li>
    <li>ID: {props.id}</li>
    <li>{props.title}</li>
        <li>
        <input type="checkbox" checked={completed} onChange = {handleChange}></input></li>
        </ul>
        </>
    );
}






export default ToDo;