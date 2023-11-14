import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import {Cart} from "../Context";

export default function Card_main() {

  const {isOpen,setIsOpen}=useContext(Cart);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>     
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        onClose={()=>setIsOpen(false)}
        aria-labelledby="responsive-dialog-title"
      >      
        <DialogActions>
          <Button onClick={()=>setIsOpen(false)}>
            Disagree
          </Button>        
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}