import React from "react";
import ZingChart from 'zingchart-react';
import ProcessComponent from "./Components/processComponent";
import "./App.css";

class App extends React.Component {
  state = {
    processData: [],
    students: [
      { id: 1, name: "Arber", age: 18 },
      { id: 2, name: "Elidor", age: 19 },
      { id: 3, name: "Ulger", age: 16 },
    ],
    config: {
      type: 'bar',
      "scale-y": {
        "line-color": "#000",
        "item": {
          "font-color": "#000"
        },
        "values": "0:20:1",
        "guide": {
          "visible": true
        },
        "label": {
          "text": "Seconds",
          "font-family": "arial",
          "bold": true,
          "font-size": "14px",
          "font-color": "#000",
        },
      },
      "series": [{
        "values": [
          18.,
          19,
          16
        ],
        "alpha": 0.95,
        "borderRadiusTopLeft": 0.21,
        "background-color": "#000",
        "text": "Apple",
      }],
      "scaleX": {
        "values": [//ketu zevendeso proess names
          "Arber",
          "Elidor",
          "Ulger",
        ],
      series: [{
        values: [
          2,
         2,
          2
        ]
      }]
    }
  }
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
        <ZingChart data={this.state.config}/>
      </div>
    );
  }
}

export default App;
