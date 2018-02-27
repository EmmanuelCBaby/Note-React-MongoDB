import React, { Component } from 'react';
import axios from 'axios';

class RemoveUI extends Component {

    constructor(props){
        super(props);
        this.state={
            title:''
        }
        this.removeTitle=this.removeTitle.bind(this);
        this.removeNote=this.removeNote.bind(this);
    }

    removeTitle(event){
        this.setState({
            title:event.target.value
        })
    }

    removeNote(){
        axios({
            method:'delete',
            url:'http://localhost:3001/remove',
            data:{
                title:this.state.title
            },
            withCredentials:true
        })
        .then((obj)=>{
            alert(obj.data)
            console.log('Removed Note');
        })
        .catch((error)=>{
            alert("Could not connect to the server");
        })
    }

    render(){
        return(
            <div>
                <input type='text' placeholder='Enter the title' onChange={this.removeTitle} value={this.state.title}></input>
                <button type='button' onClick={this.removeNote}>REMOVE NOTE</button>
            </div>
        )
    }
}

export default AddUI;
