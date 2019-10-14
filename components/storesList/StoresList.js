import React from "react";
import "./StoresList.css";

export default function StoresList(props) {
  function store(name, revenue, searchName = "") {
    if (revenue >= 15000 && name.includes(searchName)) {
      return (
        <li key={revenue} className="item-list">
          <div className="item-style">
            <h1>{name}</h1>
            <h1>{revenue}</h1>
          </div>
        </li>
      );
    } else if (name.includes(searchName)) {
      return (
        <li key={revenue} className="item-list">
          <div className="item-style red-text">
            <h1>{name}</h1>
            <h1>{revenue}</h1>
          </div>
        </li>
      );
    }
  }

  const storesList = props.storesList;
  return (
    <div className="list-style">
      <ul className="ul-position">
        <li className="item-list">
          <div className="item-style">
            <h1>Loja</h1>
            <h1 className="revenue-style">Faturamento</h1>
          </div>
        </li>
        {storesList.map(({ name, revenue }, index) => {
          if (index < 10) {
            return store(name, revenue);
          }
        })}
      </ul>
    </div>
  );
}
