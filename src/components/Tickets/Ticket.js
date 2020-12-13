import { observer } from "mobx-react";
import React from "react";
import "./Ticket.scss";
import Stop from "../../img/Stops.png";
import Company from "../../img/TurkishAirlines.png";

export const Ticket = observer(({ ticket, currencyStore, order }) => {
  const ending = () => {
    if (ticket.stops === 0) return "ок";
    if (ticket.stops === 1) return "ка";
    return "ки";
  };

  const Multiplier = currencyStore.Multiplier;
  const Icon = currencyStore.CurrencyIcon;
  const Price = (ticket.price * Multiplier).toFixed(2) + Icon;

  return (
    <li className="ticket">
      <div className="Price">
        <img src={Company} alt="Turkish Airlines" />
        <button onClick={order}>
          Купить <br /> за {Price}
        </button>
      </div>

      <div className="Information">
        <div className="Time">
          <h1>{ticket.departure_time}</h1>
          <div className="Stops">
            {ticket.stops} пересад{ending()}
            <img src={Stop} alt="" />
          </div>
          <h1>{ticket.arrival_time}</h1>
        </div>

        <div>
          <span className="left">{`${ticket.origin}, ${ticket.origin_name}`}</span>
          <span className="right">
            {`${ticket.destination_name}, ${ticket.destination}`}
          </span>
        </div>

        <div style={{ color: "rgba(150, 159, 161)" }}>
          <span className="left">{ticket.departure_date}</span>
          <span className="right">{ticket.arrival_date}</span>
        </div>
      </div>
    </li>
  );
});
