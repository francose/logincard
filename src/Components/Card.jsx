import React, { Component } from 'react';
import './../App.css';

function Input(props){
    return (
        <div className="Input">
            <input
                id={props.id}
                autoComplete="off" 
                required
                type={props.type}
                placeholder={props.placeholder}
            />
            <label htmlFor={props.id}></label>
        </div>
    );
}

export default class Card extends Component {
    render() { 
        return <div>
            <div className="Card">
                <form
                    onSubmit={this.props.onSubmit}>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Joe Doe" />
                    <Input
                        id="username"
                        type="email"
                        placeholder="joe@example.com" />
                    <Input
                        id="password"
                        type="password"
                        placeholder="password" />
                    <button>
                        Log in 
                    </button>
                </form>
            </div>
         </div> ;
    }
}
 


