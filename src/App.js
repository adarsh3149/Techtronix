import './App.css';
import Navbar2 from './Components/Navbar2';
import {useRef} from 'react';
import Events from './Components/Events';
import Member from './Components/Member';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from './Components/Schedule';
import Home from './Components/Home';

function App() {
  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }
  return (
    
    <div className="App" style={{ minHeight: "100vh", minWidth: "100vw" }} onMouseMove={changePosition}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar2></Navbar2>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='/events' element={<Events></Events>}></Route>
        <Route path='/members' element={<Member></Member>}></Route>
        <Route path='/schedule' element={<Schedule></Schedule>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      <div className="cursor-style" ref={cursor} ></div>
    </div>
  );
}

export default App;
