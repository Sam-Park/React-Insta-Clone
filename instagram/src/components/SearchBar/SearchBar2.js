import React from 'react'

import { Navbar, Button, FormGroup, FormControl, Form, Label, Input, Container, Row, Col } from 'reactstrap'


const SearchBar = () => {
    return (
   <Container className="sb-container">
     
     <Row className="instagram-header">
       <Col className="instagram-h1"><h1>Instagram</h1></Col>
       <Col>
        <Form>
          <FormGroup>
          
            <Input type="search" name="search" id="exampleSearch" placeholder="Search" />
          </FormGroup>
        </Form>
       </Col>
       <Col> </Col>
       </Row>
     </Container>
    );
}






export default SearchBar