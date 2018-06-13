import React from "react";


class Character extends React.Component {
  render(){
    return(
      <div>
      <br />
        <span className="character__value">
          {this.props.Character && <p>Character: {this.props.Character}</p>}
        </span>
        <span className="character__value">
          {this.props.Quote && <p>Quote: {this.props.Quote}</p>}
        </span>
      </div>
    );
  }
}
export default Character;
