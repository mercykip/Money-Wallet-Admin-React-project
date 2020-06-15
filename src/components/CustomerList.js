import React from 'react';
import {Card,Table,ButtonGroup,Button,Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {Link} from 'react-router-dom';
class CustomerList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            customers:[],
            errorMsg: '',
        }
        this.remove=this.remove.bind(this);
     
    }
    componentDidMount(){

        axios.get("http://localhost:8061/view")
        .then( response =>{
            console.log(response)
            this.setState({customers: response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({errorMsg: 'Error retrieveing data'})
        })
    }
    async remove(id){
        await fetch(`http://localhost:8061/customerDelete${id}`,{
            method: 'DELETE',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            //   }
        })
    }
    render(){
        const { customers, errorMsg } =this.state;
      
        return(
       
            <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><FontAwesomeIcon icon={faList} />CustomerList</Card.Header>
            <Card.Body>
            <Container fluid>
                 <div className="float-right">
                 <Button color="success" to="">Add User</Button>
                 </div>
                </Container>
                {/* <Table bordered hover stripped variant ="dark" > */}
                <Table variant ="dark" >
                <thead>
                        <tr>
                        <th>CistomerId</th>
                        <th>CustomerName</th>
                        <th>email</th>
                        <th>Username</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map(customer =>
                        <tr key = {customer.customerId}>
                        <td >{customer.customerId}</td>
                        <td>{customer.customerName}</td>
                        <td>{customer.email}</td>
                        <td>{customer.username}</td>
                        <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary"  to={"" + customer.customerId}>Edit</Button>
                                <Button size="sm" color="danger" onClick={() => this.remove(customer.customerId)}>Delete</Button>
                                <Button size="sm" color="danger" onClick={() => this.remove(customer.customerId)}>View</Button>
                            </ButtonGroup>
                            </td>
                        </tr>
                        )
                        }
                    </tbody>

                </Table>
            </Card.Body>
            
        </Card>
        );

       
    }
}
export default CustomerList;