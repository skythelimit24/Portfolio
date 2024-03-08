import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../Store/AuthSlice';
const Navbar = () => {
    const dispatch = useDispatch();
    const name = localStorage.getItem("USERNAME")
   
  const  handleLogout=()=>{
        dispatch(logout())
    }
  return (
    <AppBar position="fixed" sx={{zIndex:1}} >
      <Toolbar>
        <Typography variant="h5" component="div"  sx={{ flexGrow: 1 }}>
          {name} Weather Application
        </Typography>
        <Button onClick={handleLogout} color="inherit"><Typography variant='h6'>Logout</Typography></Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
