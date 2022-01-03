import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Link, useNavigate } from "react-router-dom"
import { FiLogIn, FiLogOut } from "react-icons/fi"
import Cookies from 'js-cookie';
import axios from 'axios';



const Nav = () => {
  const navigate = useNavigate();
  const username = Cookies.get('username');


  const handleClick = () => {
    Cookies.remove("username");
    Cookies.remove("user_id");

    axios.post("/api/users/logout")
      .then(res => {

        navigate('/');
      })


  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div>
            {username !== undefined ? (< FiLogOut className='log-button' onClick={handleClick}/>) : (
              <Link to="/signIn">
                <FiLogIn className='log-button'/>
              </Link>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;