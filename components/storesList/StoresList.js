import React from "react";
import "./StoresList.css";

export default function StoresList(props) {
  let userText = "";
  if (props.userText) userText = props.userText.value;

  const storesList = props.storesList;
  let count = 0;
  return (
    <div className="list-style">
      <ul className="ul-position">
        <li className="item-list">
          <div className="item-style">
            <h1>Loja</h1>
            <h1 className="revenue-style">Faturamento</h1>
          </div>
        </li>
        {storesList.map(({ name, revenue }) => {
          if (count < 10) {
            if (
              revenue >= 15000 &&
              name.toLowerCase().includes(userText.toLowerCase())
            ) {
              count++;
              return (
                <li key={revenue} className="item-list">
                  <div className="item-style">
                    <h1>{name}</h1>
                    <h1>R$ {revenue.toLocaleString("pt-BR")}</h1>
                  </div>
                </li>
              );
            } else if (name.toLowerCase().includes(userText.toLowerCase())) {
              count++;
              return (
                <li key={revenue} className="item-list">
                  <div className="item-style red-text">
                    <h1>{name}</h1>
                    <h1>R$ {revenue.toLocaleString("pt-BR")}</h1>
                  </div>
                </li>
              );
            }
          }
        })}
      </ul>
    </div>
  );
}
