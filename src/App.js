import React from "react";
import ProcessComponent from "./Components/processComponent";
import "./App.css";

class App extends React.Component {
  state = {
    processData: [],
    students: [
      { id: 1, name: "Arber", age: 21 },
      { id: 2, name: "Elidor", age: 19 },
      { id: 3, name: "Ulger", age: 16 },
    ],
  };
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, } = student; //destructuring
      return <ProcessComponent id={id} name={name} time={age} />;
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Operating Systems Project</h1>
        <h2>Project Manager Shefqet Meda</h2>
        <h2>
          Project members:Arber Gjonaj, Elidor Varros, Eljo Decolli, Kristian
          Shatraj, Siner Sakollar, Ulger Boja
        </h2>
        <table id="students">
          <tbody>
          
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
