import { Card, Input } from "@mui/material";
import React, { Component } from "react";
import './index.css'
import AuthService from "../../Service/auth-service";
import Buttons from "../../Components/Buttons/index";



export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="Form">
         <div className="header"> 
        <img className="logo"  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png'/>
        <Buttons/>
        </div>
        <Card className="cardlogin">
         

          <form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label className="label" htmlFor="username">Username</label>
              <Input
                
                type="text"
                className="Input"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
               
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="label">Password</label>
              <Input
                type="password"
                className="Input"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                
              />
             
            </div>

            <div className="form-group">
            <a className="registrar" href="/registrar">Cadastrar</a>
              <button
                className="btnLogin"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
           
          </form>
        </Card>
      </div>
    );
  }
}