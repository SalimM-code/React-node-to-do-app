import { FiSun, FiMoon } from "react-icons/fi"
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import axios from "axios";


const List = () => {
  const id = Cookies.get('user_id')
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('api/todo/todos', {
      id
    })
    .then(res => {
      setData(res.data.todoList)
      console.log(res)
    })
  }, [id])

  

  console.log(id)
  return ( 
    <div className="container">
      <div className="logo">
        <h2>TODO</h2>
        <FiMoon className="mode-logo"/>
      </div>
      <div className="main-body">

      </div>

    </div>
  );
}
 
export default List;