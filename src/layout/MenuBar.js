import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class MenuBar extends Component {

   render() {
       return (
           <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
               <h5 className="my-0 mr-md-auto font-weight-normal">Resume</h5>
               <nav className="my-2 my-md-0 mr-md-3">
                   <Link to="/" className="p-2 text-dark" href="#">Profile</Link>
                   <Link to="/skill" className="p-2 text-dark" href="#">Personal ability</Link>
                   <Link to="/education" className="p-2 text-dark" href="#">history of education</Link>
                   <Link to="/activity" className="p-2 text-dark" href="#">Training</Link>
               </nav>
               {/* <a className="btn btn-outline-primary" href="#">Sign up</a> */}
           </div>
       )
   }

}
