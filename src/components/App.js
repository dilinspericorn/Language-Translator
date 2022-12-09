import React, { Component } from 'react';

import InputField from './InputField';
import OutputField from './OutputField';
import DropDown from './DropDown';

import axios from 'axios';

export class App extends Component {
  state = {
    input: null,
    lan: '',
    output: '',
  };
  selectedLanguage = (lang) => {
    this.setState({
      lan: lang,
    });
  };

  getTranslation = (inputtext) => {
    // console.log(inputtext, translateLanguageTo);

    axios
    .post(
      'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
      {},
        {
          params: {
            q: inputtext,
            target: this.state.lan,
          },
        }
      )
      //   .then((data) => this.setState({ output: data.data.results }));
      .then((data) => console.log(data.data.results));
  };

  render() {
    return (
      <div className="main-card">
        <div className="language-card d-flex">
          <InputField getInputValue={this.getTranslation} />
          <DropDown langSelect={this.selectedLanguage} />
        </div>
        <OutputField result={this.state.output} />
      </div>
    );
  }
}

export default App;
