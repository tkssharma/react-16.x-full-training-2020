import React, { Component } from "react";
import { Form, Container, Button, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class ContainerComp extends Component {
    state = {
        UserName: '',
        FirstName: '',
        LastName: ''
    }
    handleSubmit(e){
       e.preventDefault();
       e.stopPropagation();
       axios.post(`http://localhost:3000/api/users`, { this.state })
       .then(res => {
         console.log(res.data);
         const {_id} = res.data;
         console.log(_id);
       })
    }
    handleChange(e){
        const {name, value} = e.target;
        this.setState(s => {
            return {
                ...s, [name]: value
            }
        })
    }
    render() {
        const {UserName, FirstName, LastName} = this.state;
        return (
            <React.Fragment>
                <Container>
                    <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)} value={UserName} type="text" name="UserName" placeholder="UserName" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)}  name="FirstName"  value={FirstName} type="text" placeholder="FirstName" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control onChange={(e) => this.handleChange(e)}  name="LastName"   value={LastName} type="text" placeholder="LastName" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default ContainerComp;