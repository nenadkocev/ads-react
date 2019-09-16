import React, { Component } from 'react';
import QueryHolder from "./Components/QueryHolder";
import AdsList from "./Components/AdsList";
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import AdDetails from "./Components/AdDetails";
import Footer from "./Components/footer";
import Header from "./Components/header";

class App extends Component {

    constructor(props){
        super(props);
    }

  render() {
    return (
        <div className="App bg">
            <Header/>
            <div className="container">
                <BrowserRouter>
                    <Route exact path="/" component={QueryHolder}/>
                    <Route exact path="/ads" component={AdsList}/>
                    <Route exact path="/ad/:source/:id" component={AdDetails}/>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
