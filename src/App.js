import {Landing,Error,Dashboard,Register} from "./pages";
import styled from "styled-components";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (  
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Dashboard/>}/>
      <Route path='landing'  element={<Landing/>}/>
      <Route path='register'  element={<Register/>}/>
      <Route path='*'  element={<Error/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
