import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button, Alert } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
const Login = ({ title, history }) => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginFailed, setLoginFailed] = useState(false)
  return (
    <div className="container">
      <Form onSubmit={async (event) => {
        event.preventDefault()
        console.log(username, password)  
        try {
            let result = await axios.post("http://40.114.229.80/api/login", {
            username, password
            })
            console.log(result)
            localStorage.setItem("userid", result.data.userid)
            setLoginFailed(false)
            // navigate to details screen
            history.push('/details')
        } catch(e) {
            setLoginFailed(true)
        }
      }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          { isLoginFailed? <Alert variant="danger">Logon failed</Alert> : <></> }          
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
