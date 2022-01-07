import { useEffect, useState } from "react";
import { Container } from "./styles/createNew.styled";
import  Checkbox  from "@mui/material/Checkbox";
import axios from "axios";

const CreateTodo = (props) => {
  const { data, setData } = props;
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/todo/new', {
      name: newTodo
    }).then(res => {

      setData(res.data.data);
      setNewTodo("");
    })
  }
  return ( 
    <Container className="input-field">
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