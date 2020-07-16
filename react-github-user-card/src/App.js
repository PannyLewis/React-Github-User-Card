import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/PannyLewis`)
      .then((response) => {
        // console.log(res)
        console.log(userData);
        this.setState({
          userData: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Github Usercards</h1>
      </div>
    );
  }
}

export default App;
