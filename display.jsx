import React, {Component} from 'react';
import './display.scss';
class Display extends Component {
        constructor(props){
          super(props)
          this.state = {
            printed: ''
          }
        }

        render(){
          return(
             <div className="display">
             {this.state.printed}
             
             </div>
          )
        }
}

export default Display;