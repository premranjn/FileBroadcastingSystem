import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { Row, Col } from "react-bootstrap";
import './Login.css';
import { getDatabase, ref, set } from "firebase/database"
import { auth } from "../firebase";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3uBQQjemaS87oKxxZXuk8ZKB59OeqQeU",
  authDomain: "react-auth-1c49e.firebaseapp.com",
  projectId: "react-auth-1c49e",
  storageBucket: "react-auth-1c49e.appspot.com",
  messagingSenderId: "237217792286",
  appId: "1:237217792286:web:43c5b48719d6b1da84c90f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      const reference = ref(db, 'users/' + name);

      set(reference, {
        userName: name,
        email: email,
        role: role
      });
      navigate("/");
    } catch (err) {
      setError(err.message);
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
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="User name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
          

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
          </Col>
        </Row>
      </Container>
    </body>
    </>
  );
};

export default Signup;
