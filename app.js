import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import StoresList from "./components/storesList/StoresList";
import Map from "./components/map/Map";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: []
    };
  }

  componentDidMount() {
    const { stores } = require("./resources/data/data.json");
    const { revenue } = stores;
    this.setState({ stores: stores });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="revenue-minimun">
          <div className="half-box"></div>
          <div className="half-box">
            <h1 className="revenue-title">Faturamento mínimo esperado</h1>
          </div>
        </div>
        <div className="content-size">
          <div className="box-style">
            <div className="input-size">
              <input type="text" className="input-style first-input" />
            </div>
            <StoresList storesList={this.state.stores} />
          </div>
          <div className="box-style">
            <div className="input-size">
              <input type="text" className="input-style second-input" />
            </div>
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
