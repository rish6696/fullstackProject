import React from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap'
import '../components/style.css'

function ForgotPasswordModal(props) {
    const {show,onHide} = props 
    return (
        <Modal
            show = {show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName="modal-30w"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span style={{ fontSize: '15px' }} >Forgot Password</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Button style={{width:'100%'}} variant="primary" type="submit">
                                    Reset Password
                                 </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}


export default ForgotPasswordModal;