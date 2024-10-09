import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import AllUserContext, { ModalData } from '../../usecontext';
import { useContext } from 'react';

export default function ButtonAppBar() {
  const { handler} = useContext(ModalData);
  return (
    <AllUserContext>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{padding:"10px"}}>
        <div style={{display:"flex",justifyContent:"space-between",border:"0px solid red",width:"50%",marginLeft:"100px"}}>
        <Link to={"/"} style={{textDecoration:"none",color:"white"}}><Typography variant='h5'>Home</Typography></Link>
        <Link to={"/user"} style={{textDecoration:"none",color:"white"}}><Typography variant='h5'>User</Typography></Link>
        <Link to={"/about"} style={{textDecoration:"none",color:"white"}}><Typography variant='h5'>About</Typography></Link>
        <Typography variant='h5'>Login User</Typography>
        <Button variant='contained' sx={{width:"20%",background:"black",color:"white"}} onClick={handler}>Contact+91</Button>
        </div>
      </AppBar>
    </Box>
    </AllUserContext>
  );
}