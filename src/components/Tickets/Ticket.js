import React from "react";

export const Ticket = ({ ticket }) => {
  const ending = () => {
    if (ticket.stops === 0) return "ок";
    if (ticket.stops === 1) return "ка";
    return "ки";
  };

  return (
    <li className="ticket">
      <div className="Price">{ticket.price}</div>
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
};
