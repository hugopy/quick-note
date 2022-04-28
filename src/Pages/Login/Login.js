import {React, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { Form, Button } from "react-bootstrap";

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    function login() {
        alert("Bem vindo! " + email);
        navigate('/home');
    }

  return (
    <>
      <Link to="/temp">Clique para ir até a home!</Link>
      <div className="base">
        <div className="container">
          <h1>Quick Note</h1>
          <Form className="inputs">
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="Email"
              onChange={(e) => {setEmail(e.target.value)}}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="senha">
              <Form.Control type="password" placeholder="Senha" 
              onChange={(e) => {setPassword(e.target.value)}}/>
            </Form.Group>
            <Button variant="primary" onClick={login}>Login</Button>
          </Form>
        </div>
      </div>
    </>
  );
}
