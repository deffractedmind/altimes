import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
import MainCard from "./components/MainCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends
    };

    // Binding the removeFriend method to the App component instance
    this.removeFriend = this.removeFriend.bind(this);
  }

  removeFriend(id) {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {/* {this.state.friends.map(friend =>
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        )} */}
        <MainCard />
      </Wrapper>
    );
  }
}

export default App;
