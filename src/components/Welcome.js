import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Login from './Login';
export default class Welcome extends Component{
    render(){
        return(

            <Jumbotron className="bg-dark text-white">
                  <h1>Money-wallet Administrator</h1>
                 
      <Login/>
                </Jumbotron>
        );
        
    }
}
