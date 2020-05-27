import React,{useState,useEffect} from 'react';
import './App.css';
import Video from "./Video/index"
import Logo from "../logo.jpg"
import { Button,Container,Row,Col,Form} from 'react-bootstrap';
function App() {
  console.log("app")
  const [searchTerm,setsearchTerm] = useState('')
  const [passToChild,setpassToChild] = useState("newyork")

  const onsubmit=(event)=>{
    event.preventDefault()
    setpassToChild(searchTerm)
  }
  return (
    <Container>
  <Row>
    <Col>
    <Form  onSubmit={e=>onsubmit(e)}>
  <Form.Row className="search-box">
  <Col xs={4} md={2} style={{margin:"auto"}}>
  <img src={Logo} 
  alt="Youtube logo"
  width="100px"
  style={{margin:"auto"}}/>
  </Col>
    <Col xs={5} md={7}>
    <Form.Control type="text" placeholder="Search video here..." 
    onChange={event=>setsearchTerm(event.target.value)}
    style={{flex:1}}
    />
    </Col>
    <Col xs={3} md={3}>
    <Button variant="primary" onClick={e=>onsubmit(e)}>Search</Button>
    </Col>
  </Form.Row>
</Form>
    </Col>
  </Row>
  <Row>
    <Video searchString={passToChild}/>
    </Row>
</Container>
  );
}

export default App;
