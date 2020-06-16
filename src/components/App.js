//functional component //imr shortcut for import react
// import React from 'react'

// const App = (props) => {
//     return (
//         <div>
//          <h1>{props.name}</h1>

//         </div>
//     )
// }

// export default App

//Class Component
import React, { Component } from "react"; //imrc es7 shortcut

class App extends Component {
  constructor(props) {
    super(props);
    //this.state is an object
    this.state = {
      text: "Today is June 16th.",
      hasLoaded: false,
    };
    //this.handleChange = this.handleChange.bind(this)
  }
  //method
  handleChange = (e) => {
    this.setState({
      grass: e.target.value,
    });
  };
  handleClick = () => {
    this.setState((prevState) => ({
      hasLoaded: !prevState.hasLoaded,
    }));  
  };
  // in this case, the method overrides hasLoaded:false, goes in befr pg renders code & sets hasLoaded to true
  componentDidMount() {
      this.setState({
          hasLoaded: true 
      })
  }
  render() {
    if (this.state.hasLoaded) {
      return (
        <React.Fragment>
          <h1>
            {this.props.name} {this.state.text}
          </h1>

          <input
            placeholder={this.state.text}
            value={this.state.grass}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Click Here!</button>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Loading</h1>
          <button onClick={this.handleClick}>Click Here!</button>
        </React.Fragment>
      );
    }
  }
}

export default App;
