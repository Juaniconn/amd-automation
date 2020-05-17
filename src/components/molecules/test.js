import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.updateCounter = this.updateCounter.bind(this);
    
    }
    updateCounter(type){
        var count = this.state.counter;
         type ==='increment'? count++ : count-- ;
        this.setState({counter: count});
    }
    
    render() {
        return (
            <div>Value of counter in parent is {this.state.counter} <Child onClick={this.updateCounter}/></div>
        )
    }
}
const Child = (props) =>{
    return (
        <div>
            <h1>Hello, React..</h1>
            <p>I am form child and the buttons below are fom child. Click on the corresponding buttom to update counter value in parent</p>
            <button onClick={(e) => props.onClick('increment')}>Increment</button><br/><br/>
            <button onClick={(e) => props.onClick('decrement')}>Decrement</button>
        </div>
    )
}

export default App