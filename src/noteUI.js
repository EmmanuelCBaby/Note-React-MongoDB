import React, { Component } from 'react';
import './App.css';

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
    }

    listNote(){
        this.setState({
            notestyles:{
                visibility:'hidden'
            },
            list:true
        })
    }

    searchNote(){
        this.setState({
            notestyles:{
                visibility:'hidden'
            },
            search:true
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
                <button type="button" onClick={this.searchNote}>Search</button>
                <button type="button" onClick={this.addNote}>Add</button>
                <button type="button" onClick={this.removeNote}>Remove</button>
                </div>
                <div>
                {this.state.search ? <searchUI /> : null}
                {this.state.add ? <addUI /> : null}
                {this.state.remove ? <removeUI /> : null}
                </div>
            </div>
        )
    }
}

export default NoteUI;
