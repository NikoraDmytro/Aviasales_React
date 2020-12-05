import { observer } from "mobx-react";
import React from "react";

export const Ticket = observer(({ ticket, currencyStore }) => {
  const ending = () => {
    if (ticket.stops === 0) return "ок";
    if (ticket.stops === 1) return "ка";
    return "ки";
  };

  const Multiplier = currencyStore.Multiplier;
  const Icon = currencyStore.CurrencyIcon;

  return (
    <li className="ticket">
      <div className="Price">{`${ticket.price * Multiplier}${Icon}`}</div>
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