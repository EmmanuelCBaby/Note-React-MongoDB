import React, { Component } from 'react';
import axios from 'axios';
import AddUI from './addUI'

class NoteUI extends Component {

    constructor(props){
        super(props);
        this.state = {
            list:false,
            search:false,
            add:false,
            remove:false,
            notestyles:{
                visibility:'visible'
            }
        }
        this.addNote=this.addNote.bind(this);
        // this.listNote=this.listNote.bind(this);
    }

    // listNote(){
    //     axios({
    //         method:'get',
    //         url:'http://localhost:3001/list',
    //         withCredentials:true
    //     })
    //     .then((obj)=>{
    //         console.log(obj);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // }

    // searchNote(){
    //     this.setState({
    //         notestyles:{
    //             visibility:'hidden'
    //         },
    //         search:true
    //     })
    // }

    addNote(){
        this.setState({
            notestyles:{
                visibility:'hidden'
            },
            add:true
        })
    }

    // removeNote(){
    //     this.setState({
    //         notestyles:{
    //             visibility:'hidden'
    //         },
    //         remove:true
    //     })
    // }

    render(){
        return(
            <div>
                <div style={this.state.notestyles}>
                <button type="button" onClick={this.listNote}>List</button>
                <button type="button" onClick={this.searchNote}>Search</button>
                <button type="button" onClick={this.addNote}>Add</button>
                <button type="button" onClick={this.removeNote}>Remove</button>
                </div>
                <div>
                {/* {this.state.search ? <SearchUI /> : null} */}
                {this.state.add ? <AddUI /> : null}
                {/* {this.state.remove ? <RemoveUI /> : null} */}
                </div>
            </div>
        )
    }
}

export default NoteUI;
