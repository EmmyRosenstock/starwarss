import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, List, Typography } from "@mui/material";
import {AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './index.css'
import Buttons from "../../Components/Buttons/index";
const Personagens = () => {
    const [personagens, setPersonagens] = useState([])
    const [countPersonagens, setCountPersonagens] = useState(0)
    const [page, setPage] = useState(1)
    const [especies, setEspecies] = useState([])
    const [planetaNatal, setPlanetaNatal] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=${page}`).then(response => {
            const contagem = response.data.count
            const personagens = response.data.results

            setCountPersonagens(contagem)
            setPersonagens(personagens)

           
            response.data.next === null ?
                document.getElementById('btnNext').style.display = 'none' :
                document.getElementById('btnNext').style.display = 'block'

            response.data.previous === null ?
                document.getElementById('btnPrevious').style.display = 'none' :
                document.getElementById('btnPrevious').style.display = 'block'

        })
    }, [page])
    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/?page=${page}`).then(response => {
            const especies = response.data.results
            const nomeEspecies = especies.map(specie => specie.name)
            setEspecies(nomeEspecies)
        })
    }, [page])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/?page=${page}`).then(response => {
            const planetas = response.data.results
            const nomePlanetas = planetas.map(planeta => planeta.name)
            setPlanetaNatal(nomePlanetas)

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

              <div className="header"> 
        <img className="logo"  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png'/>
        <Buttons/>
        </div>
            
            
            <div className="content">
            <div className="count"> 
             <Typography className="total">Total de Personagens: {countPersonagens}</Typography></div>
                {personagens.map(personagens => (
                    <Card className="card-personagem" key={personagens.name}>
                      <div className="name"><h2>{personagens.name}</h2></div>
                       
                       <List className="list">
                     
                        <li>
                        <ul>
                         <span> Altura: </span>   
                         <span>{personagens.height / 100} m</span>
                        </ul>
                        <ul>
                         <span> Peso: </span>   
                         <span>{personagens.mass} kg</span>
                        </ul>
                        <ul>
                         <span> Cor do Cabelo: </span>   
                         <span>{personagens.hair_color} </span>
                        </ul>
                        <ul>
                         <span> Cor da Pele: </span>   
                         <span>{personagens.skin_color} </span>
                        </ul>
                        <ul>
                         <span> Cor do olho: </span>   
                         <span>{personagens.eye_color} </span>
                        </ul>
                        <ul>
                         <span> Ano de nascimento: </span>   
                         <span>{personagens.birth_year} </span>
                        </ul>
                        <ul>
                         <span> Sexo: </span>   
                         <span>{personagens.gender} </span>
                        </ul>
                       
                        </li>
                     
                       </List>
                     </Card>
                ))}

            </div>
            <div className="navigation-page">
                <button className="btn" onClick={handlePreviousPage}><AiOutlineArrowLeft />PREVIOUS PAGE</button>
               <button className="btn" onClick={handleNextPage}>NEXT PAGE<AiOutlineArrowRight /></button>
            </div>

        </div>
    )
}
export default Personagens