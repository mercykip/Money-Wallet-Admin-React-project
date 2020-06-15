import React, {Component} from 'react';
import {Card,Table,Button,Container} from  'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default class TransactionList extends Component{
    constructor(props){
        super(props);
        this.state={
            transactions:[]
        }

    }
    componentDidMount(){
   axios.get('http://localhost:8061/viewTransaction')
   .then(response => {
    console.log(response)
    this.setState({transactions: response.data})


    })
    }
   
    render(){
        const{transactions}=this.state;
        return(
       
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} />TransactionList</Card.Header>
                <Card.Body>
                
                    {/* <Table bordered hover stripped variant ="dark" > */}
                        <Table variant ="dark" >
                    <thead>
                            <tr>
                            <th>#</th>
                            <th>CustomerId</th>
                            <th>TransactionType</th>
                            <th>TransactedAmount</th>
                            <th>AccountBalance</th>
                            <th>Date</th>
                           
                            </tr>
                        </thead>
                        <tbody>
                        {transactions.map(transaction=>
                            <tr key = {transaction.tranId}>
                             
                        <td>{transaction.customerId}</td>
                            <td>{transaction.customerId}</td>
                            <td>{transaction.trasactionType}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.accountBalance}</td>
                            <td>{transaction.date}</td>
                          
                            </tr>
                            ) }
                        </tbody>

                    </Table>
                </Card.Body>
                
            </Card>
        );
   
    }
}
