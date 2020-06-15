import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
class Footer extends React.Component{
    render(){
        return(
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container lg={12} className="text-center text-muted">
                    <div>All Rights Reserved</div>
                    
                </Container>
            </Navbar>
        );
    }
}
export default Footer;