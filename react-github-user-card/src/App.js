import React from "react";
import axios from "axios";
import Card from "./components/Card";
import Users from "./components/Users";
import Following from "./components/Following";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [following, setFollwing] = useState([]);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      following: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/PannyLewis`)
      .then((response) => {
        console.log(response);

        this.setState({
          users: response.data,
        });
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://api.github.com/users/PannyLewis/following`)
      .then((response) => {
        console.log(response);

        this.setState({
          following: response.data.following,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Github Usercards</h1>
        {this.state.users.map((user) => {
          return <Users key={user.id} user={user} />;
        })}

        {this.state.following.map((follow) => {
          return <Following key={follow.id} follow={follow} />;
        })}
        <Card />
      </div>
    );
  }
}

export default App;
