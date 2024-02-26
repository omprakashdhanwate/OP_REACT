import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Omprakash Dhanwate",
      email: "sai@gmail.com",
    };
  }
  changeName = () => {
    this.setState({ name: document.getElementById("name").value });
  };
  changeEmail = () => {
    this.setState({ email: document.getElementById("email").value });
  };

  render() {
    return (
      <div classname= "sample">
        <h2>Enter the new Name</h2>
        <input type="text" placeholder="Name" id="name"></input>
        <button onClick={this.changeName}>Change It</button>

        <h2>Enter the new Email</h2>
        <input type="text" placeholder="Email" id="email"></input>
        <button onClick={this.changeEmail}>Change Now</button>

        <h2>Name: {this.state.name}</h2>
        <h2>Email : {this.state.email}</h2>

      
      </div>
    );
  }
}
export default Form;
