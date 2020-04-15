import React from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

export default class App extends React.Component {
  state = {
    username: 'chathuranga'
  };

  onTextChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App" >
        <UserInput change={this.onTextChangeHandler} username={this.state.username}></UserInput>
        <UserOutput username={this.state.username}
          textone="sample text one"
          texttwo="sample text two"></UserOutput>
        <UserOutput username={this.state.username}
          textone="sample text four"
          texttwo="sample text four"></UserOutput>
      </div>
    )
  };
}
