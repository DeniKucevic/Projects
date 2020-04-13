import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "4% 0",
      }}
    >
      <p>Please log in:</p>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Enter username</Form.Label>
          <Form.Control type="email" placeholder="Enter username" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Enter password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <Button variant="success">Log in!</Button>
        </div>
      </Form>
      <p>
        Not yet registered? <Link to="/register"> Register!</Link>
      </p>
    </div>
  );
};

export { Login };
