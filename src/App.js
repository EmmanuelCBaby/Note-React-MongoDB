import React, { Component } from 'react';
// import './App.css';
import Login from './login'
// import NoteUI from './noteUI'
import axios from 'axios'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      signin:false,
      styles:{
        visibility:'visible'
      }
    }
    this.newUser=this.newUser.bind(this);
    this.newPass=this.newPass.bind(this);
    this.oldUser=this.oldUser.bind(this);
    this.register=this.register.bind(this);
  }

  newUser(event){
    this.setState({
      username: event.target.value
    })
  }

  newPass(event){
    this.setState({
      password: event.target.value
    })
  }

  oldUser(){
    this.setState({
      styles:{
        visibility:'hidden'
      },
      signin:true
    })
  }

  register(){
    axios(
      {
        method:'post',
        url:'http://localhost:3001/register',
        data:{
          username:this.state.username,
          password:this.state.password
        }
      }
    )
    .then((res)=>{
      this.setState({
        username:'',
        password:''
      });
      alert(res.data);
    })
    .catch((error)=>{
      alert("Could not connect to the server");
    })
  }

  
  render() {
    return (
      <div>
        <div style={this.state.styles}>
        <label>Username:</label>
        <input type='text' placeholder='Username' onChange={this.newUser} value={this.state.username}></input>
        <br/>
        <br/>
        <label>Password:</label>
        <input type='password' placeholder='Password' onChange={this.newPass} value={this.state.password}></input>
        <br/>
        <br/>
        <button type='button' onClick={this.register}>Sign Up</button>
        <br/>
        <br/>
        <label>Already have an account ?</label>
        <button type='button' onClick={this.oldUser}>Sign In</button>
        </div>
        {this.state.signin ? <Login /> : null}
      </div>
    );
  }
}

export default App;
