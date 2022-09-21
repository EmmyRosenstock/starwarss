import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, List, Typography } from "@mui/material";


import Buttons from "../../Components/Buttons/index";
const SaibaMais = () => {
    const [page, setPage] = useState(1)
    const [countEspacoNaves, setCountEspacoNaves] = useState(0)
    const [espacoNaves, setEspacoNaves] = useState([])
    const [pilotos, setPilotos] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/?page=${page}`).then(response => {
            const contagem = response.data.count
            const naves = response.data.results

            setCountEspacoNaves(contagem)
            setEspacoNaves(naves)

           
            response.data.next === null ?
                document.getElementById('btnNext').style.display = 'none' :
                document.getElementById('btnNext').style.display = 'block'

            response.data.previous === null ?
                document.getElementById('btnPrevious').style.display = 'none' :
                document.getElementById('btnPrevious').style.display = 'block'
        })
    }, [page])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=${page}`).then(response => {
            const pilotos = response.data.results
            const nomePilotos = pilotos.map(piloto => piloto.name)
            setPilotos(nomePilotos)
        })
    }, [page])
   

    function handleNextPage() {
        const currentPage = page + 1
        setPage(currentPage)
    }

    function handlePreviousPage() {
        const currentPage = page - 1
        setPage(currentPage)
    }

    return (
        <div className="personagens">
            <div className="content">
            <div className="count"> 
             <Typography className="total">Total de Espaço Naves: {countEspacoNaves}</Typography></div>
                {espacoNaves.map(espacoNaves => (
                    <Card className="card-personagem" key={espacoNaves.name}>
                      <div className="name"><h2>{espacoNaves.name}</h2></div>
                       
                       <List className="list">
                     
                        <li>
                        <ul>
                         <span> Modelo: </span>   
                         <span>{espacoNaves.model}</span>
                        </ul>
                        <ul>
                         <span> Monofatura: </span>   
                         <span>{espacoNaves.manufacturer}</span>
                        </ul>
                       
                        <ul>
                         <span> Comprimento: </span>   
                         <span>{espacoNaves.length} </span>
                        </ul>
                        <ul>
                         <span> Velocidade: </span>   
                         <span>{espacoNaves.max_atmosphering_speed} </span>
                        </ul>
                        <ul>
                         <span> Capacidade de carga: </span>   
                         <span> {espacoNaves.cargo_capacity} </span>
                        </ul>
                       
                       
                        </li>
                     
                       </List>
                     </Card>
                ))}

            </div>
            <div className="navigation-page">
           
                <button className="btn" onClick={handlePreviousPage}>PREVIOUS PAGE</button>
               <button className="btn" onClick={handleNextPage}>NEXT PAGE</button>
            </div>

        </div>
    )
}
export default SaibaMais