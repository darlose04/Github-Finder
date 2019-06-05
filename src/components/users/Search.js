import React, { Component } from "react";

class Search extends Component {
  // this state doesn't need to be App level, it's relevant to this component
  state = {
    text: ""
  };

  // if you don't use arrow functions, you have to explicitly bind 'this'
  // this.onSubmit.bind(this) below in the form tag

  onSubmit = e => {
    e.preventDefault(); // using this prevents the default action of it submitting to a file
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;
