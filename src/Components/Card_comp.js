import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useContext } from 'react';
import {Cart} from "../Context";

function Card_comp() {
  const {setIsOpen}=useContext(Cart);
  return (
    
    
          <Box className='card' sx={{width:{xs:"20rem",md:"32rem"},height:{xs:"28rem",md:"40rem",border:"0.1rem solid black"},borderRadius:"0.5rem"}}>
          <CardActionArea onClick={()=>setIsOpen(true)} sx={{width:"100%",height:"100%",cursor:"none"}}>
            
            <CardContent>
              <Typography  variant="h5" component="div">
                Event name
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Description
              </Typography>
            </CardContent>
            </CardActionArea>
        </Box>
     
  )
}

export default Card_comp