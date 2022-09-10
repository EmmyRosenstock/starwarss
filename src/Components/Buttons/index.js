
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Button, Card } from "@mui/material";
import yoda from '../../assets/Cartoon-Yoda-Star-Wars-PNG.png'
import './index.css'
import Typography from '@mui/material/Typography';
import nave from '../../assets/clipart3130072.png'
import planet from '../../assets/pngwing.com (1).png'

const Buttons = ()=>{
     

    return(
        <div className="button">
         
        
           <div className="contents">
            <Button className="card" onClick={()=>window.location.href = '/personagens'}>
                <img src={yoda} className='chewe'/>
                <Typography className='title'>Personagens</Typography>
                 
            </Button>
            <Button className="card" onClick={()=>window.location.href = '/naves'}>
                <img src={nave} className='chewe'/>
                <Typography className='title'>Naves</Typography>
                
            </Button>
            <Button className="card" onClick={()=>window.location.href = '/planetas'}>
                <img src={planet} className='chewe'/>
                <Typography className='title'>Planetas</Typography>
                 
            </Button>

           </div>
          
      
         
        </div>
    )

}
export default Buttons 