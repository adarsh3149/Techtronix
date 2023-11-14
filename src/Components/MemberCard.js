import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useContext } from 'react';
import {Cart} from "../Context";

function Membercard() {
  const {setIsOpen}=useContext(Cart);
  return (
    
    
          <Box className='card' sx={{width:{xs:"20rem",md:"32rem"},height:{xs:"28rem",md:"40rem",border:"0.1rem solid black"},borderRadius:"0.5rem"}}>
          
            
            <CardContent>
              <Typography  variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>

        </Box>
     
  )
}

export default Membercard