
import React, { Component } from 'react';

class Personal extends Component {
    constructor(props) {
        super();
        this.state = {
            person: {        
                name: props.name,
                age: props.age,
                dateOfBirth: props.dateOfBirth,
                number: props.number}
            
         };
    }
    
    render() {
        return (
            <div className="person">
                <h1>{this.state.person.name}</h1>
                <p><strong>Age:</strong> {this.state.person.age}</p>
                <p><strong>Birth:</strong>  {this.state.person.dateOfBirth}</p>
                <p> <strong># Number</strong>{this.state.person.number}</p>
            </div>
        );
    }
};
export default Personal;