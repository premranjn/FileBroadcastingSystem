import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { Container, Row, Col } from "react-bootstrap";
import './Login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const { resetPassword } =  useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("")
    try {
      await resetPassword(email);
      setMessage("Check your Inbox for further instructions");
    } catch (err) {
      console.log(err);
      setError("Failed to reset password");
    }
  };

  return (
    <>
        <body style = {{    
    backgroundColor: '#fafafa',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    alignItems: 'center',
    height: '100vh'}}>

      <Container style = {{ width: "400px", backgroundColor: "#fafafa"}}>
        <Row>
          <Col>

          <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" href="/">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
      Bootstrap
      </a>
      </div>
      </nav>
      <div className="p-4 box">
        <h2 className="mb-3 text-center">Password Reset</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Reset
            </Button>
            <div className="w-100 text-center mt-1">
              <Link to="/Home">Login</Link>
            </div>
          </div>
        </Form>
      </div>
          </Col>
        </Row>
      </Container>
    </body>
    </>
  );
};

export default ForgotPassword;
