import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './router/Home';
import About from './router/About';
import Header from './router/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMode: this._checkMode(),
    };
    this.updateDimensions=this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  shouldComponentUpdate(nextProp, nextState) {
    if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
      return false;
    }
    return true;
  }

  updateDimensions() {
    this.nonFixedHeaderHeight = document.getElementById('head-container').clientHeight || 0;
    this.setState(prevState => ({
      mobileMode: this._checkMode(),
    }));
  }

  _checkMode() {
    const width = window.innerWidth || document.body.clientWidth;
    const isMobile = width < 800 ? true : false;//normally we need some constant width instead of 600 here
    return isMobile;
  }

  render() {
    console.log("render:",this.state.mobileMode);
    return (
      <Router>
        <div>
          <Route exact path="/" render={(routeProps) => (
            <Home {...routeProps} mobileMode={this.state.mobileMode} />
          )} />
          <Route path="/about" render={(routeProps) => (
            <About {...routeProps} mobileMode={this.state.mobileMode} />
          )}/>
          <Route exact path="/group/:groupName" component = {()=>(<div><Header mode={this.state.mobileMode}/>group page</div>)}/>
        </div>
      </Router>
    );
  }
}

export default App;
