import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route ,Switch} from 'react-router-dom';
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact';
import Posts from './components/Posts';
import Services from './components/Services'

export class App extends Component {
 
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={AboutUs}/>
        <Route path='/Services' component={Services}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/:post_id' component={Posts}/>
        </Switch>
        
      </div>
      </BrowserRouter>
      
    )
  }
}

export default App
