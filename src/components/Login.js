import React ,{Component}  from 'react';

import {Card,Form,Button} from 'react-bootstrap';
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={email:'', password:''};
        this.emailE=this.emailE.bind(this);
        this.passwordE=this.passwordE.bind(this);
        this.login=this.login.bind(this);
    }
    login(event){
        alert('email:  ' + this.state.email +'password: ' + this.state.password);
        event.preventDefault();
    }
    emailE(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    passwordE(event){
            this.setState({
                [event.target.name]:event.target.value
     });

    }
    render(){
        return(
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header>Admin login</Card.Header>
                <Form onSubmit={this.login} id="loginId">
                <Card.Body >
                            <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                                <Form.Control className="w-50 p-3" 
                                type="email" name="email"
                                 placeholder="Enter email"
                                 value={this.state.email}
                                 onChange={this.emailE}
                                 required
                                 />    
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="w-50 p-3"type="password" 
                                name="password" placeholder="Password" 
                                value={this.state.password}
                                onChange={this.passwordE}
                                required
                                
                                />
                            </Form.Group>

                            <Button className="w-50 p-3" variant="primary" type="submit">
                                Login
                            </Button>
                </Card.Body>
                </Form>
                </Card>
        );
        
    }
}