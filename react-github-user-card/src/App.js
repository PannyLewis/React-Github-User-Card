import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/PannyLewis`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    // console.log(users);
    return (
      <div className="App">
        <h1>Git Hub Users</h1>
        <div>{/* {this.state.users.map((user) => ())} */}</div>
      </div>
    );
  }
}

export default App;
