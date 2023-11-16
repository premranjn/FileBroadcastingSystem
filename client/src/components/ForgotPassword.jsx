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
        margin: 'auto',
        padding: 0,
        backgroundImage: 'url("https://i.pinimg.com/originals/d8/0f/97/d80f97761d71e3f49588d9d2aa18ae58.jpg")',
        position: 'absolute',
        backgroundSize: '1920px 1080px',
        // background: 'rgba(255, 255, 255, 0.7)',
        backgroundrepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        alignItems: 'center',
        height: '100%'
        }}>

      <Container style = {{ width: "500px",
          position: 'realtive',
          top: '40%',
          height: "400px",
          // backgroundColor: "#fafafa",
          background: 'rgba(255, 255, 255, 0.5)',
          margin: 'auto',
          borderRadius: '15px',}}>
        <Row>
          <Col>

          <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" href="/">
      Home
      </a>
      </div>
      </nav>
      <div className="p-4 box" style={{
            width: "200px",
            // backgroundColor: "#fafafa",
            background: 'rgba(255, 255, 255, 0.7)',
            margin: 'auto',
            // right: '10%',
            borderRadius: '15px',


            // height: '7',
          }}> 
        <h2 className="mb-3 text-center">Password Reset</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit} style={{
            position: 'absolute',
            width: "410px",
            // backgroundColor: "#fafafa",
            background: 'rgba(255, 255, 255, 0.2)',
            right : '39%',
            top : '30%',
            margin: 'auto',
            // right: '10%',
            borderRadius: '15px',


            // height: '7',
          }} >
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
              <Link to="/">Login</Link>
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
