import { useState } from "react";
import { Container } from "./styles/createNew.styled";
import  Checkbox  from "@mui/material/Checkbox";

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return ( 
    <Container className="input-field">
      {/* <button className="checkmarkButton">
        <div className="checkmarkBorder">
          <div className="checkmark"></div>
        </div>
      </button> */}
      <Checkbox disabled/>

      <form onSubmit={handleSubmit} className="newTodo">
        <input className="input"
          value={newTodo}
          onChange={(e) => {setNewTodo(e.target.value)}}
          placeholder="Enter a new todo..."
          />
      </form>
    </Container>
  );
}

export default CreateTodo;