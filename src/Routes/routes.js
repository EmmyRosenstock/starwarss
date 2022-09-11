
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Personagens from '../Pages/Personagens';
import Naves from '../Pages/Naves';
import Planetas from '../Pages/planetas';
import Login from '../Pages/Login/login';
import Register from '../Pages/Register';
import ProtectedRoutes from './ProtectedRoutes';
import  SaibaMais from '../Pages/Saibamais/Saibamais'
import {PrivateRoute} from 'react-auth-kit'
const Routering =()=> {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path ="/" element ={<Home/>}/>
    <Route path ="/personagens" element ={<Personagens/>}/>
    <Route path ="/naves" element ={<Naves/>}/>
    <Route path ="/planetas" element ={<Planetas/>}/>
    <Route path ="/login" element ={<Login/>}/>
    <Route path ="/registrar" element ={<Register/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default Routering;