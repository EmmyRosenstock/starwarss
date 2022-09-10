import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Button, Card } from "@mui/material";
import yoda from '../../assets/Cartoon-Yoda-Star-Wars-PNG.png'
import './index.css'
import Typography from '@mui/material/Typography';
import nave from '../../assets/clipart3130072.png'
import storm from '../../assets/271-2717853_cartoon-gun-png.png'
import Buttons from "../../Components/Buttons/index";

const Home = ()=>{
      return(
        <div className="home">
         <div className="header"> 
         <a >
         <img className="logo"  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png'/> 
         </a>
       
        </div>
        <Buttons/>
      
         
        </div>
    )

}
export default Home