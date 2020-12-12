import { observer } from "mobx-react";
import React from "react";
import { useState } from "react";
import { OrderRegistrationForm } from "../OrderRegistrationForm/OrderRegistrationForm";

export const Ticket = observer(({ ticket, currencyStore }) => {
  const [FormVisibility, setFormVisibility] = useState(false);

  const ending = () => {
    if (ticket.stops === 0) return "ок";
    if (ticket.stops === 1) return "ка";
    return "ки";
  };

  const Multiplier = currencyStore.Multiplier;
  const Icon = currencyStore.CurrencyIcon;

  return (
    <li className="ticket">
      {FormVisibility ? <OrderRegistrationForm /> : null}
      <div className="Price">
        <button onClick={() => setFormVisibility(true)}>{`Купить за ${
          ticket.price * Multiplier
        }${Icon}`}</button>
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
