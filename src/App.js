import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Character from "./components/Character";

class App extends React.Component{

  state={
    Quote: undefined,
    Character: undefined
  }
  getCharacter = async (e) =>{
    e.preventDefault();
    const api_call = await fetch(`https://got-quotes.herokuapp.com/quotes`);
    const data = await api_call.json();

    console.log(data);

    this.setState({
      Character: data.character,
      Quote: data.quote
    });
  }
  render(){
    return(
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
            <div className="col-xs-7 title-container"></div>
                <div className="col-xs-5 form-container">
               <Titles />
              <Form getCharacter={this.getCharacter}/>
              <Character
                Character={this.state.Character}
                Quote={this.state.Quote}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
<Titles />


export default App;
