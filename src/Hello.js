import React, { Component, Fragment } from "react";

// First we will make a new context
const MyContext = React.createContext();

// Then creat a provider component
class MyProvider extends Component {
  state = {
    name: "Jenny",
    age: 22,
    location: "Utah"
  };

  growAYearOlder = () => this.setState({ age: this.state.age + 1 });

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: this.growAYearOlder
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = props => (
  <Fragment>
    <Person />
  </Fragment>
);
class Person extends Component {
  render() {
    return (
      // Only use context Consumer where the context aka data
      // Uses render prop as a child of Consumer and it will ALWAYS afunction!
      <MyContext.Consumer>
        {context => (
          <Fragment>
            <p>Name: {context.state.name}</p>
            <p>Location: {context.state.location}</p>
            <p>Age: {context.state.age}</p>
            <button onClick={context.growAYearOlder}>Add Year</button>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}
class Test extends Component {
  render() {
    return (
      // Like redux, we wrap this in the app level
      <MyProvider>
        <Family />
      </MyProvider>
    );
  }
}
export default Test;
