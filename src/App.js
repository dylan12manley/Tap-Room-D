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
import NewKegControl from './components/NewKegControl';
import Footer from './components/Footer';
import NewKegsList from './components/NewKegsList';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }
  handleAddingNewKegToList(newKeg){
    console.log(newKeg);
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    console.log(newMasterKegList);
    this.setState({masterKegList: newMasterKegList});
  }
  render(){
    return (
      <div id='bodyDiv'>
        <div id='noiseImg'>
          <Header/>
          <Switch>
            <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
            <Route exact path='/' component={Home} />
            <Route path='/kegs' component={AvailableKegs} />
            <Route path='/kegsadded' render={()=><NewKegsList nKegList={this.state.masterKegList} />} />
            <Route component={Error404} />
          </Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
