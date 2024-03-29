import React, {Component} from 'react'


export default class progress extends Component{

   render (){
       return (
           <div>
               <label>{this.props.data.name}</label>
               <div className="progress">
                   <div className={"progress-bar progress-bar-striped "+this.props.data.color} role="progressbar" style={{width: this.props.data.percent}} aria-valuenow={this.props.data.percent} aria-valuemin="0" aria-valuemax="100">{this.props.data.percent}</div>
               </div>
           </div>
       )
   }

}
