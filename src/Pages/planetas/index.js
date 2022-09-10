import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Buttons from "../../Components/Buttons/index";
import './index.css'
import { Card, List } from '@mui/material'


const Planetas = () => {
    const [page, setPage] = useState(1)
    const [countPlanetas, setCountPlanetas] = useState(0)
    const [planetas, setPlanetas] = useState([])
    const [habitantes, setHabitantes] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/?page=${page}`).then(response => {
            const contagem = response.data.count
            const planetas = response.data.results

            setCountPlanetas(contagem)
            setPlanetas(planetas)

           
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
            const pessoas = response.data.results
            const nomePessoa = pessoas.map(pessoa => pessoa.name)
            setHabitantes(nomePessoa)
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
        <div id="main">
             <div className="header"> 
        <img className="logo"  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png'/>
        <Buttons/>
        </div>

            <div className="count">
                <h1>TOTAL PLANETS: {countPlanetas}</h1>
                
            </div>

            <div id="content">
                {planetas.map(planetas => (
                    <Card className="card-planetas" key={planetas.name}>
                        <h2>{planetas.name}</h2>
                        <List className='list'>
                        <li>
                            <ul>
                                <span>Rotação</span>
                                <span> {planetas.rotation_period}</span>
                            </ul>
                            <ul>
                                <span>Orbita</span>
                                <span> {planetas.orbital_period}</span>
                            </ul>
                            <ul>
                                <span>Diametro</span>
                                <span>{planetas.diameter}</span>
                            </ul>
                            <ul>
                                <span>Clima</span>
                                <span>{planetas.climate}</span>
                            </ul>
                            <ul>
                                <span>Gravidade</span>
                                <span>{planetas.gravity}</span>
                            </ul>
                        </li>
                        </List>
                       
                        
                        
           
                    
                    </Card>
                ))}
            </div>

            <div className="navigation-page">
                <button id="btnPrevious" onClick={handlePreviousPage}><FaArrowCircleLeft />PREVIOUS PAGE</button>

                <button id="btnNext" onClick={handleNextPage}>NEXT PAGE<FaArrowCircleRight /></button>
            </div>

          
        </div>
    )
}

export default Planetas