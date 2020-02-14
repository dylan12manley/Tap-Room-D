import React from 'react';
import Header from './components/Header';
import { Row, Col, Container } from 'react-bootstrap';
import logo from './logo.svg';
import Error404 from './components/Error404';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvailableKegs from './components/AvailableKegs';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div id='bodyDiv'>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
