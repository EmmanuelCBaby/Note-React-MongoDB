import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            logusername:'',
            logpassword:''
        }
        this.logUser=this.logUser.bind(this);
        this.logPass=this.logPass.bind(this);
        this.verifyUser=this.verifyUser.bind(this);
    }

    logUser(event){
        this.setState({
            logusername:event.target.value
        })
    }

    logPass(event){
        this.setState({
            logpassword:event.target.value
        })
    }

    verifyUser(){
        axios({
            method:'post',
            url:'http://localhost:3001/login',
            data:{
                username:this.state.logusername,
                password:this.state.logpassword
            }
        })
        .then((obj)=>{
            this.setState({
              logusername:'',
              logpassword:''
            });
            alert(obj.data);
          })
          .catch((error)=>{
            alert("Could not connect to the server");
          })
    }

    render(){
        return(
            <div>
                <label>Username:</label>
                <input type='text' placeholder='Username' onChange={this.logUser} value={this.state.logusername}></input>
                <br/>
                <br/>
                <label>Password:</label>
                <input type='text' placeholder='Password' onChange={this.logPass} value={this.state.logpassword}></input>
                <br/>
                <br/>
                <button type='button' onClick={this.verifyUser}>Sign In</button>
                <div>

                </div>
            </div>
        );
    }
}

export default Login;
