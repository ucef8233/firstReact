import React, { Component } from "react";
import MyCar from "./components/Mycars"; ///3 importer le composant
import "./App.css";

class App extends Component {
  state = {
    titre: "Mon cataloge",
  };
  changTitle = (e) => {
    this.setState({
      titre: "My New Tite",
    });
  };
  changeTitleViaParam = (titre) => {
    this.setState({
      titre, /// si les 2 nom sans identique titre  seule == titre : titre ,
    });
  };
  changeBind = (titlebind) => {
    this.setState({
      titre: titlebind,
    });
  };
  changeViaInput = (e) => {
    this.setState({
      titre: e.target.value,
    });
  };
  render() {
    return (
      <div className="App">
        <MyCar titre={this.state.titre} />
        {/* <p>{this.state.titre}</p> */}
        <button onClick={this.changTitle}>Changer le titre </button>
        <button onClick={() => this.changeTitleViaParam("Titre apré click")}>
          Changer le titre2
        </button>
        <button onClick={this.changeBind.bind(this, "new bnd title")}>
          Changer via methode bind{" "}
        </button>
        <input
          type="text"
          onChange={this.changeViaInput}
          value={this.state.titre}
        />
      </div>
    );
  }
}

export default App;
