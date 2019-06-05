import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  // want to store app level state in App.js. Also need to not hard code these users like this
  // don't need this state anymore since the users are going to be coming in as props. Need to change state to props below
  // state = {
  //   users: [
  //     {
  //       id: "id",
  //       login: "mojombo",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //       html_url: "https://github.com/mojombo"
  //     },
  //     {
  //       id: "2",
  //       login: "defunkt",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
  //       html_url: "https://github.com/defunkt"
  //     },
  //     {
  //       id: "3",
  //       login: "pjhyett",
  //       avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
  //       html_url: "https://github.com/pjhyett"
  //     }
  //   ]
  // };

  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
