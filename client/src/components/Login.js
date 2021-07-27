import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="container">
      <Form onSubmit={async (event) => {
        event.preventDefault()
        console.log(username, password)  
        let result = await axios.post("http://localhost:5000/api/login", {
          username, password
        })
        console.log(result)
      }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control placeholder="Enter email" onChange={(event) => { 
            const { value } = event.target;
            setUserName(value)
           }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(event) => {
            const { value } = event.target;
            setPassword(value)
          }} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
