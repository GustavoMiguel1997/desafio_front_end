import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Header";
import StoresList from "./components/storesList/StoresList";
import MapCreate from "./components/map/Map";
import leftIcon from "./resources/images/left.svg";
import rightIcon from "./resources/images/right.svg";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      storeUserRef: "",
      storeUserRevenue: 15000
    };

    this.storeNameRef = React.createRef();
    this.storeRevenueRef = React.createRef();
  }

  componentDidMount() {
    const { stores } = require("./resources/data/data.json");
    const { revenue } = stores;
    this.setState({ stores: stores });
  }

  changeStoreNameSearch() {
    const userText = this.storeNameRef.current.value;
    this.setState({ storeUserRef: userText });
  }

  changeRevenueSearch() {
    const userText = this.storeRevenueRef.current.value;
    this.setState({ storeUserRevenue: userText });
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
              <input
                type="text"
                className="input-style first-input"
                placeholder="Pesquisa"
                ref={this.storeNameRef}
                onChange={() => this.changeStoreNameSearch()}
              />
            </div>
            <StoresList
              storesList={this.state.stores}
              userText={this.storeNameRef.current}
              userRevenue={this.storeRevenueRef.current}
            />
            <div className="stores-pages">
              <button>
                <img src={leftIcon} alt="voltar" className="image-style" />
              </button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>19</button>
              <button>
                <img src={rightIcon} alt="voltar" className="image-style" />
              </button>
            </div>
          </div>
          <div className="box-style">
            <div className="input-size">
              <input
                type="text"
                className="input-style second-input"
                placeholder="15.000,00"
                ref={this.storeRevenueRef}
                onChange={() => this.changeRevenueSearch()}
              />
            </div>
            <MapCreate
              storesList={this.state.stores}
              userText={this.storeNameRef.current}
              userRevenue={this.storeRevenueRef.current}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
