import { FiSun, FiMoon, FiCheck, FiX } from "react-icons/fi"
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import FormControlLabel  from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import classnames from "classnames"
import { Container } from "./styles/list.styled";
import CreateTodo from "./CreateTodo";
import BottomNav from "./BottomNav";


const List = () => {
  const id = Cookies.get('user_id')
  const [data, setData] = useState([])
  const [checked, setChecked] = useState(false);

  // const myClasses = classnames('')

  useEffect(() => {
    axios.get('api/todo/todos', {
      id
    })
    .then(res => {
      setData(res.data.todoList)
      console.log(res)
    })
  }, [id])

  const handleChange = (e) => {
    setChecked(true);
  }


  return ( 
    <Container className="container">
      <div className="wrapper">

        <div className="logo">
          <h2>TODO</h2>
          <FiMoon className="mode-logo"/>
        </div>

      <CreateTodo data={data} setData={setData} />

      <div className="body">

        <div className="list-display">
          {data.map((todo) => (
            <div className="main-body" key={todo.id}>
            <Checkbox onChange={handleChange} size="small"  checkedIcon={<FiCheck />} sx={{ borderRadius: '50%'}}/>
            <p>{todo.name}</p>
            <FiX className="remove" />
            </div>
          ))}
        </div>
      
      <BottomNav data={data} setData={setData} />
      
      </div>

      </div>

    </Container>
  );
}
 
export default List;