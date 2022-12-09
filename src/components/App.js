import React, { Component } from 'react';

import InputField from './InputField';
import OutputField from './OutputField';
import DropDown from './DropDown';

import axios from 'axios';

export class App extends Component {
  state = {
    input: null,
  };

  getInputValue=(e)=>{
    // console.log(e);
    this.setState({
        input:e
    })
  }

Translation=()=>{
    
}

  getTranslation = (inputtext, translateLanguageTo) => {
    axios.post(
      'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
      {},
      {
        params: {
          q: inputtext,
          target: translateLanguageTo,
        },
      }
    );
  };

  render() {
    console.log(this.state.input);
    return (
      <div className="main-card">
        <div className="language-card d-flex">
          <InputField getInputValue={this.getInputValue}/>
          <DropDown />
        </div>
        <OutputField />
      </div>
    );
  }
}

export default App;
