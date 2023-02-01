
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
let navigate = useNavigate();
const[email,setEmail] = useState('');
const [password, setPassword] = useState('');
// console.log("Hello redux")
 const handleemail = (e) =>{
     setEmail(e.target.value)
 }
 const handlepassword = (e) =>{
  setPassword(e.target.value)
 }
 const handleApi = (e) => {
  e.preventDefault();
  console.log({email,password})
  axios.post('https://reqres.in/api/login', {
    "email": email,
    "password": password 
  })
  .then((response)=> {
    console.log(response);
    alert("LOGGED IN SUCCESSFULLY")
    navigate("/")
  })
  .catch((error) => {
    alert("INVALID USERNAME OR PASSWORD")
  });
 }
  return (
    <div className="App">
      <h1 className="mt-5 text-center" >LOGIN</h1>
      <Container style={{width:"300px", marginTop:"40px" }}>
        <Row>
          <Col >
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} onChange={handleemail} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mt-7" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handlepassword} placeholder="Password" />
              </Form.Group>

              <Button className="mt-3" variant="primary" type="submit" onClick={handleApi}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
