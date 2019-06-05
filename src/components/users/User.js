import React, { Component } from "react";

class User extends Component {
  componentDidMount() {
    // this is coming from the :login in App.js line 101
    // it takes in username in the getUser method in App.js, login and username are the same here
    // gets all the user info from state and then passes that state back into the User component
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = this.props.user;

    const { loading } = this.props;

    return <div>{name}</div>;
  }
}

export default User;
