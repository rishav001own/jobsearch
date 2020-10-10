import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateJob from './pages/createJob/creatingJob'
import JobDash from './pages/jobDashboard/jobDash'
import HomePage from './pages/homePage/homepage';

function App() {
  return (
    <Router>
        <div className="App">
            <header className="App-header">
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand>
                    <Link to={"/"} className="nav-link">
                      Job Hub
                    </Link>
                  </Navbar.Brand>
                  <Nav className="justify-content-end">
                    <Nav>
                      <Link to={"/"} className="nav-link">
                        HomePage
                      </Link>
                    </Nav>
                    </Nav>
                    
                </Container>
              </Navbar>
            </header>
            <Row>
              <Col>
                <div className="wrapper">
                  <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path="/createjob" component={CreateJob}/>
                    <Route path="/jobs" component={JobDash}/>
                    {/* <Route path='/edit-link' component={Edit}/> */}
                  </Switch>
                </div>
              </Col>
            </Row>
        </div>
    </Router>
  );
}

export default App;
