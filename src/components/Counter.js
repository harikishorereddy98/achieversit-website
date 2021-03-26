import React, {Component} from 'react';
class ClassComp extends Component{
state = {
    count : 0,

}
constructor(props){
    super();
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
}
   increment(){
       this.setState({
           count : this.state.count + 1,
       })

   }
   
  decrement(){
    if(this.state.count > 0 ) {
        this.setState({
            count: this.state.count - 1,
        });

     
    }
}

    render(){
        return(
            <div>
  <p> Current count {this.state.count}</p>
        <button onClick={this.increment} > 
            increment
        </button>
        <button onClick={this.decrement}> decrement </button>

            </div>
        )
    }

}
export default ClassComp;