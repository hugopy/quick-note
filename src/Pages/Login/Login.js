import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Link to="/home">Clique para ir até a home!</Link>
      <div className="base">
        <div className="container">
          <h1>Quick Note</h1>
          <Form className="inputs">
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="Email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="senha">
              <Form.Control type="password" placeholder="Senha"/>
            </Form.Group>
            <Button variant="primary">Login</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
