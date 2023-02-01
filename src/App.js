import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './Component/Home';
import Login from './Component/Login';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
     </Routes>
  
      </BrowserRouter>
    </div>

  );
  }

export default App;
