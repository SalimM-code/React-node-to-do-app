import { FiSun, FiMoon, FiCheck, FiX } from "react-icons/fi"
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import FormControlLabel  from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import classnames from "classnames"


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
    <div className="container">
      <div className="logo">
        <h2>TODO</h2>
        <FiMoon className="mode-logo"/>
      </div>
      {data.map((todo) => (
        <div className="main-body" key={todo.id}>
        <Checkbox onChange={handleChange} size="small"/>
        <p>{todo.name}</p>
        <FiX className="remove" />
        </div>
      ))}
      <div className="lists-detail">
        <p>{data.length} items left</p>
        <div className="detail-mid">
          <button>All</button><button>Active</button><button>Completed</button>
        </div>
        <button className="detail-end">Clear Completed</button>
      </div>

    </div>
  );
}
 
export default List;