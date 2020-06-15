import React  from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
class NavigationBar extends React.Component{
render(){
return (
    <Navbar bg="dark" variant="dark">
        <Link to={"/welcome"} className="navbar-brand">Money Wallet
        {/* <Navbar.Brand href="#">Money Wallet</Navbar.Brand> */}
            </Link>
        
            <Nav className="mr-auto"> */}
                <Link to={"/"} className="nav-link"></Link>
                <Link to={"/customerlist"} className="nav-link">CustomerList</Link>
                <Link to={"/transactionlist"} className="nav-link">TransactionList</Link>
             </Nav>
   </Navbar>

);



}
}
export default NavigationBar;