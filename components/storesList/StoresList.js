import React from "react";
import "./StoresList.css";

export default function StoresList({ storesList, userText, userRevenue }) {
  userText = userText ? userText.value : "";
  userRevenue = userRevenue ? userRevenue.value : 15000;

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
        {storesList.map(({ name, revenue }, index) => {
          if (count < 10) {
            userRevenue = userRevenue ? userRevenue : 15000;
            if (
              revenue >= userRevenue &&
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
            } else if (index == 49 && count == 0) {
              return (
                <li key={revenue} className="item-list">
                  <div className="item-style">
                    <h1>Nenhuma loja encontrada</h1>
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
