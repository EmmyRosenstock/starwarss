import { Card } from "@mui/material";
import React, { Component, useState } from "react";
import Form from "react-validation/build/form";
import Buttons from "../../Components/Buttons/index";
import UserService from '../../Service/UserService'
import {  validarSenha,  validarNome, validarConfirmarSenha } from '../../utils/validadores'

import { useNavigate } from "react-router-dom";

const userService = new UserService()

const Register =()=> {
const [loading, setLoading] = useState()
const [form, setForm]= useState([])
const navigate = useNavigate()
 const handleSubmit = async(event)=>{
  event.preventDefault()
  try{
    setLoading(true)
    const {data}= await userService.cadastrar({
      nome: form.nome,
      password: form.password
    })
    if(data){
      const responseLogin = await userService.login({
        nome : form.nome,
        password: form.password
      })
      if ( responseLogin === true){
        alert('usuário Cadastrado com Sucesso')
        navigate('/')
      }
    }
    setLoading(false)
  }
  catch(err){
    alert('algo deu errado ao cadastrar'+ err)
  }
 }    
 const handleChange = (event)=>{
  setForm({...form, [event.target.name]:event.target.value})
 }
 const validadorInput = () => {
  return validarSenha(form.password)
  && validarConfirmarSenha(form.password, form.confirmarPassword)
  && validarNome(form.nome)
}
    return (
      <div className="Form">
           <div className="header"> 
        <img className="logo"  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png'/>
        <Buttons/>
        </div>
        <Card className="cardlogin">
          

          <Form>
           
              <div>
                <div className="form-group">
                  <label className="label" htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="Input"
                    name="username"
                    onChange={handleChange}
                   
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="label">Password</label>
                  <input
                    type="password"
                    className="Input"
                    name="password"
                    
                    onChange={handleChange}
                   
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="label">Confirmar Senha</label>
                  <input
                    type="password"
                    className="Input"
                    name="confirmarPassword"
                    
                    onChange={handleChange}
                   
                  />
                </div>

                <div className="form-group">
                <a className="login" href="/login">login</a>
                  <button className="btn" onClick={handleSubmit}  >Sign Up</button>
                </div>
              </div>
       

          
             
          </Form>
        </Card>
      </div>
    );
  }
export default Register