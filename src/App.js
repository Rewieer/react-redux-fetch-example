import React, { Component } from 'react';
import { getStore } from "./store";
import { connect } from "react-redux";
import userManager from "./userManager";
import Loader from "./Loader";

// Notice how I just import the store from the store file and use it outside the component
// This is not an anti-pattern
const increment = () => getStore().dispatch({ type: "INCREMENT" });
const decrement = () => getStore().dispatch({ type: "DECREMENT" });

const mapStateToProps = (state) => ({
  counter: state.counter,
  isFetching: state.users.isFetching,
  users: state.users.data
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>{ this.props.counter }</h3>
        <input type="button" onClick={increment} value={"+"}/>
        <input type="button" onClick={decrement} value={"-"}/><br />

        <h3>Users : { this.props.isFetching ? <Loader/> : <input type={"button"} onClick={userManager.fetch} value={"Fetch users"}/>}</h3>
        <ul>
          { this.props.users.map(user => <li key={user.id}>{ user.name }</li>)}
        </ul>

      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
