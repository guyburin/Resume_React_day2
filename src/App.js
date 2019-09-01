import React, { Component } from 'react';
import './App.css';
import MenuBar from './Layout/MenuBar';
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import Containers from './contrainers/containers';
import {BrowserRouter,Route} from "react-router-dom";
import skill from './components/skill/skill';
import education from './components/education/education';
import activity from './components/activity/activity';


function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

class App extends Component {



  render(){
     return (
       <div>
         <BrowserRouter>
            <MenuBar></MenuBar>
            <Containers>
              <Header></Header>
              <Route exact path="/" component={Content}></Route>
              <Route path="/skill" component={skill}></Route> 
              <Route path="/education" component={education}></Route> 
              <Route path="/activity" component={activity}></Route> 
            </Containers>
         </BrowserRouter>
         
       </div>
     )
   }

}


export default App;