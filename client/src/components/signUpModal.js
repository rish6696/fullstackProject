import React from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import '../components/style.css'

function SignUpModal(props) {
    const { onHide,show,loginfromsignUp  } = props;
    return (
        <Modal
            onHide={onHide}
            show={show}
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName="modal-30w"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span style={{ fontSize: '15px' }} >Sign Up to your EasyClass Account</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formGroupExampleInput">
                                    <Form.Control type="email" placeholder="Enter Full Name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Enter Password" />
                                </Form.Group>
                                <Button style={{width:'100%'}} variant="primary" type="submit">
                                    Sign Up
                                 </Button>
                            </Form>
                        </Col>
                    </Row>


                    <Row className='justify-content-centered' >
                        <Col style={{textAlign:'center'}} >
                         <span style={{fontSize:'8px'}} >By signing up, you agree to our <a href='#terms' > Terms of Use </a > and  <a href='#policy' > Privacy policy. </a>  </span>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Container>
                    <Row className='justify-content-center' >
                        <Col style={{textAlign:'center'}} >
                         <span style={{fontSize:'13px'}} > Already have an account? <a  onClick={loginfromsignUp} href='##' > Log In </a> </span>
                        </Col>
                    </Row>
                </Container>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUpModal;