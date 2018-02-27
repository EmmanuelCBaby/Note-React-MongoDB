import React, { Component } from 'react';
import axios from 'axios';
import AddUI from './addUI'
import RemoveUI from './removeUI'

class NoteUI extends Component {

    constructor(props){
        super(props);
        this.state = {
            add:false,
            remove:false,
            notes:[],
            notestyles:{
                visibility:'visible'
            }
        }
        this.addNote=this.addNote.bind(this);
        this.removeNote=this.removeNote.bind(this);
        this.listNote=this.listNote.bind(this);
    }

    listNote(){
        axios({
            method:'get',
            url:'http://localhost:3001/list',
            withCredentials:true
        })
        .then((obj)=>{
            this.setState({
                notes:obj.data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    addNote(){
        this.setState({
            notestyles:{
                visibility:'hidden'
            },
            add:true
        })
    }

    removeNote(){
        this.setState({
            notestyles:{
                visibility:'hidden'
            },
            remove:true
        })
    }

    render(){
        return(
            <div>
                <div style={this.state.notestyles}>
                <button type="button" onClick={this.listNote}>List</button>
                <button type="button" onClick={this.addNote}>Add</button>
                <button type="button" onClick={this.removeNote}>Remove</button>
                </div>
                <div>
                {
                    this.state.notes.map((element,index)=>{
                        return (<div key={index}>
                        <p>Title : {element.title}</p>
                        <p>Body : {element.body}</p>
                        </div>)
                    })
                }
                </div>
                <div>
                {this.state.add ? <AddUI /> : null}
                {this.state.remove ? <RemoveUI /> : null}
                </div>
            </div>
        )
    }
}

export default NoteUI;
