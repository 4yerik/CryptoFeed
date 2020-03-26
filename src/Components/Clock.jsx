import '../App.css';
import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
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
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>


          <textarea>Text</textarea>

          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
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

// Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

// can not do binding with arrow functions
// <button onClick={() => this.handleClick()}></button>

// The problem with this syntax is that a different callback is created each time the button renders. 
// In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do 
// an extra re-rendering. 
// We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.


// passing arguments to event handlers
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>


// In both cases, the e argument representing the React event will be passed as a second argument after the ID. 
// With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.



// you might want a component to hide itself even though it was rendered by another component. 
// To do this return null instead of its render output. For example a Warning component:

// if (!props.warn) {return null}


// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings
// <li key={todo.id}></li>

// don’t recommend using indexes for keys if the order of items may change. 
// This can negatively impact performance and may cause issues with component state


// Keys serve as a hint to React but they don’t get passed to your components. 
// If you need the same value in your component, pass it explicitly as a prop with a different name:


// In HTML, form elements such as <input>, <textarea>, and <select> typically maintain their own state and update 
// it based on user input.