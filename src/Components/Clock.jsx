import '../App.css';
import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>At {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// constructor is called
// renders for the first time
// component did mount sets up a timer
// browser calls the tick method every second
// setState initiates rerenders
// if the clock is ever removed, unmount is called

export default Clock;


// react setState may be asyncronous because of batching (better performance)
// Because props and state may be updated asynchronously, you should not rely on their values for calculating the next state.


// this.setState({counter: this.state.counter + this.props.increment});
// wrong



// pass a function instead of an object
// this.setState((state, props) => ({counter: state.counter + props.increment}));
// right


// data can flow down, children can have some info but don't know or care where it came from



// cannot return false to prevent default behavior in React
function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

// e is a synthetic event. React defines these synthetic events, so you don’t need to worry about cross-browser compatibility.


// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
