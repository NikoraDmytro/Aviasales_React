import { observer } from "mobx-react";
import React from "react";

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
        <button onClick={order}>{`Купить за ${Price}`}</button>
      </div>
      <div className="Information">
        {`${ticket.departure_time} ${ticket.stops} пересад${ending()} ${
          ticket.arrival_time
        }`}
        <br />
        {`${ticket.origin}, ${ticket.origin_name} ${ticket.destination}, ${ticket.destination_name}`}
        <br />
        {`${ticket.departure_date} ${ticket.arrival_date}`}
      </div>
    </li>
  );
});
