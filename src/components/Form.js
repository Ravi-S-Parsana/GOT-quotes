import React from "react";

class Form extends React.Component {
  render(){
    return(
      <div>
        <form onSubmit={this.props.getCharacter}>
        <button type="submit" name="Submit">Get Quote</button>
        </form>
      </div>
    );
  }
}
export default Form;
