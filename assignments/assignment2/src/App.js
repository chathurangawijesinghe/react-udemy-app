import React from 'react';
import "./App.css";

import Validation from './components/Validation';
import Char from './components/Char';

export default class App extends React.Component {

  state = {
    textInput: 'input'
  }

  textChangeHandler = (event) => {
    this.setState({
      textInput: event.target.value
    });
  };

  deleteCharHandler = (charIndex) => {
    // const persons = this.state.persons.slice();
    const charArray = [...this.state.textInput];
    charArray.splice(charIndex, 1);
    this.setState({ textInput: charArray.join('') });
  }

  render() {
    let charactors = null;

    charactors = (this.state.textInput.split('').map((value, index) =>{
      return <Char key={index} char={value} 
      //click={this.deleteCharHandler.bind(this, index)}  />
      click={() => {this.deleteCharHandler(index)}}  />
    }));

    return (
      <div className="App">
        <input type="text" onChange={this.textChangeHandler} value={this.state.textInput} />
        <Validation textLength={this.state.textInput.length} />
        {charactors}
      </div>
    )
  };
}
