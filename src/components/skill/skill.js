import React, { Component } from 'react';
import Progress from '../progress'
export default class skill extends Component {
    // 80>= bg-info
    // 65>= bg-success
    // 50>= bg-warning
    // 50 < bg-danger
    state ={
        language : [
            {name:"C", percent:"85%", color:"bg-info"},
            {name:"Java", percent:"100%", color:"bg-info"},
            {name:"PHP", percent:"82%", color:"bg-info"},
            {name:"HTML5", percent:"73%", color:"bg-success"},
            {name:"C#", percent:"25%", color:"bg-danger"},
            {name:"JS", percent:"85%", color:"bg-info"},
            {name:"SQL", percent:"88%", color:"bg-info"},
            {name:"XML", percent:"25%", color:"bg-danger"},
            {name:"CSS", percent:"90%", color:"bg-info"},
            {name:"jQuery", percent:"50%", color:"bg-warning"},
            {name:"REACT", percent:"50%", color:"bg-warning"},
            {name:"REACT-NATIVE", percent:"75%", color:"bg-success"},
            {name:"IONIC", percent:"15%", color:"bg-danger"},
        ]
    }

   render() {
       return (
        <div className="card-deck mb-3">
        <div className="card mb-4 shadow-sm">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">Skill</h4>
            </div>
            <div className="card-body">
               {this.state.language.map(obj => <Progress data={obj} ></Progress>)}
            </div>
        </div>    
   </div>
       )
   }

}
