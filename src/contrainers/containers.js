import React ,{Component} from 'react';
import './containers.css';
export default class Containers extends Component{

    render(){
        return(
            <div class="container Mt-50">
                 {this.props.children}
            </div>
        )
    }
}