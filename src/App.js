import {Landing,Error,Dashboard,Register} from "./pages";
import styled from "styled-components";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (  
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Dashboard/>}/>
      <Route path='landing'  element={<Landing/>}/>
      <Route path='register'  element={<Register/>}/>
      <Route path='*'  element={<Error/>}/>
    </Routes>
    <ToastContainer position="top-center" autoClose={1000} />
  </BrowserRouter>
  );
}

export default App;
