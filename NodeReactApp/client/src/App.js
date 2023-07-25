import React from 'react';

const ContainerStyle = {
  backgroundColor: "#0E101C",
  width: "315px",
};
const FormStyle = {
color: "white",
padding: "10px",
formInline: "30px",
};
const TextFieldStyle = {
  color: "white",
  padding: "7px",
  marginBottom: "10px",
  width: "260px",
  borderRadius: "3px",
  borderColor: "white",
  paddingRight : "25px",
  };
  const DescriptionStyle = {
    color: "white",
    padding: "16px",
    marginBottom: "10px",
    width: "260px",
    borderRadius: "3px",
    borderColor: "white",
    };
    const FileStyle = {
      borderRadius: "3px",
      borderColor: "white",
      };
    
const ButtonStyle = {
  color: "white",
  backgroundColor: "#DB6390",
  paddingLeft: "25px",
  paddingRight: "25px",
  paddingTop: "10px",
  paddingBottom: "10px",
  width: "290px",
  borderRadius: "3px",
  borderColor: "#DB6390",
  marginTop: "15px",
  };
class Test extends React.Component {
  render() {
    return (
      <div className="App" style={ContainerStyle}>
      <form style={FormStyle}>
        <div className="TextField">
          <input type="text" id="firstName" style={TextFieldStyle} placeholder="First name" />
        </div>
        <div className="TextField">
          <input type="text" id="lastName" style={TextFieldStyle}placeholder="Last name" />
        </div>
        <div className="TextField">
          <input type="email" id="Email" style={TextFieldStyle} placeholder="Email" />
        </div>
        <div className="TextField">
          <input type="text" id="Description" style={DescriptionStyle} placeholder="About you" />
        </div>
        <div style={FileStyle}>
        <input type="file" id="img" accept=".pdf, .docx" ></input>
        </div>
        <center>
        <button type="submit" className="submit-btn" style={ButtonStyle}>
          S U B M I T
        </button>
      </center>
      </form>
    </div>
    );
  }
}

export default Test;