import React, { Component } from 'react';
import './App.css';

class NoteUI extends Component {

    constructor(props){
        super(props);
        this.state = {
            list:false,
            search:false,
            add:false,
            remove:false
        }
    }

    render(){
        return(
            <div>
                <button type="button" onClick={this.listNote}>List</button>
                <button type="button" onClick={this.searchNote}>Search</button>
                <button type="button" onClick={this.addNote}>Add</button>
                <button type="button" onClick={this.removeNote}>Remove</button>
            </div>
        )
    }
}

export default NoteUI;
