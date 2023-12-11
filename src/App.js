import './App.css';
import React,{useState,useEffect} from 'react';
import Navbar2 from './Components/Navbar2';
// import { animateScroll as scroll } from 'react-scroll';
import { useRef } from 'react';
import Events from './Components/Events';
import Member from './Components/Member';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from './Components/Schedule';
import Home from './Components/Home';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Box } from '@mui/material';
import Sponser from './Components/Sponser';
import Footer from './Components/Footer';
function App() {
  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }
  useEffect(() => {
    // Scroll to the top on page load
    scroll.scrollToTop();
  }, []);

  return (
    <>


      <div className="App" style={{ minHeight: "100vh", minWidth: "100vw" }} onMouseMove={changePosition}>
        {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar2></Navbar2>}>
            <Route index element={<Home></Home>}>
            </Route>
            <Route path='/events' element={<Events></Events>}></Route>
            <Route path='/members' element={<Member></Member>}></Route>
            <Route path='/schedule' element={<Schedule></Schedule>}></Route>
          </Route>
        </Routes>
      </BrowserRouter> */}
        {/* <Navbar2 />

        <Element name="home" className='section'>
        <Home />
          </Element>
        
        <Box sx={{ marginTop: "80vh" }}>
          <Element name="events" className='section'>
            <Events />
          </Element>
          <Element name="schedule" className='section'>
            <Schedule></Schedule>
          </Element>
          <Element name="members" className='section'>
            <Member></Member>
          </Element>
          <div className="cursor-style" ref={cursor} ></div>
        </Box> */}
        <Navbar2 />
        <Home />
        <Box sx={{ marginTop: "80vh" }}>
        <Events />
        <Schedule></Schedule>
        <Member></Member>
        
        <Sponser/>
        <Footer/>
        <div className="cursor-style" ref={cursor} ></div>
        </Box> 
      </div>
    </>
  );
}

export default App;
