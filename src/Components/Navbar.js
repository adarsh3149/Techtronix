import * as React from 'react'
import svg from './logo-01.svg'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

function Navbar(props) {
  return (
    <>
    {/* <ElevationScroll {...props}>
      <AppBar sx={{backgroundColor:"#f1f1f1",height:"12vh",padding:"1.2rem 0"}}>     
        <div className='nav'>
    
    <img className='svg' src={svg} alt="" />

    </div>
    <div className='nav'>
        <div className='nav-items'>events</div>
        <div className='nav-items'>schedule</div>
    <div className='nav-items'>account</div>
    </div>
       
      </AppBar>
    </ElevationScroll> */}
    </>
  )
}

export default Navbar