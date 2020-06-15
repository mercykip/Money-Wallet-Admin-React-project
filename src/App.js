import React from 'react';

import './App.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import CustomerList from './components/CustomerList';
import TransactionList from './components/TransactionList';
import {Container, Row,  Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  const marginTop = {
    marginTop: "20px"
  };
  return (
    <Router>
      <NavigationBar/>
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
             
              <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/customerlist" exact component={CustomerList}/>
                <Route path="/transactionlist" exact component={TransactionList}/>
              </Switch>
              
              
          </Col>
          </Row>

        </Container>
       <Footer/>
    </Router>
  );
}

export default App;
