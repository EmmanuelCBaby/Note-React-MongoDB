import React, { Component } from 'react';
import axios from 'axios';

class AddUI extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
        this.addTitle=this.addTitle.bind(this);
        this.addBody=this.addBody.bind(this);
        this.addNote=this.addNote.bind(this);
    }

    addTitle(event){
        this.setState({
            title:event.target.value
        })
    }

    addBody(event){
        this.setState({
            body:event.target.value
        })
    }

    addNote(){
        axios({
            method:'post',
            url:'http://localhost:3001/add',
            data:{
                title:this.state.title,
                body:this.state.body
            },
            withCredentials:true
        })
        .then((obj)=>{
            alert(obj.data)
            console.log('Added Note');
        })
        .catch((error)=>{
            alert("Could not connect to the server");
        })
    }

    render(){
        return(
            <div>
                <input type='text' placeholder='Enter the title' onChange={this.addTitle} value={this.state.title}></input>
                <input type='text' placeholder='Enter the body' onChange={this.addBody} value={this.state.body}></input>
                <button type='button' onClick={this.addNote}>ADD NOTE</button>
            </div>
        )
    }
}

export default AddUI;
