import {Landing,Error,Register} from "./pages";
import styled from "styled-components";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Profile,AddJob,AllJobs,Stats,SharedLayout} from './pages/dashboard'


function App() {
  return (  
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<SharedLayout/>}>
          <Route index element={<Stats/>}/>
          <Route path='all-jobs' element={<AllJobs/>}/>
          <Route path='add-job' element={<AddJob/>}/>
          <Route path='profile' element={<Profile/>}/>
      </Route>
      <Route path='landing'  element={<Landing/>}/>
      <Route path='register'  element={<Register/>}/>
      <Route path='*'  element={<Error/>}/>
    </Routes>
    <ToastContainer position="top-center" autoClose={1000} />
  </BrowserRouter>
  );
}

export default App;
