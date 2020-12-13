import { observer } from "mobx-react";
import React from "react";
import { Ticket } from "./Ticket.js";

const Nester = (ticket) => {
  let NewTicket = {};

  for (let [key, value] of Object.entries(ticket)) {
    NewTicket = { ...NewTicket, [key]: value };
  }

  return NewTicket;
};

export const TicketsList = observer(({ store, order }) => {
  const ticketsStore = store.ticketsStore;
  const currencyStore = store.currencyStore;
  ticketsStore.UpdateTicketsList();
  currencyStore.fetchExchangeRates();

  return (
    <ul className="TicketsList">
      {ticketsStore.isLoading ? (
        ticketsStore.tickets.map((ticket) => {
          if (
            !store.filtersStore.filters[ticket.stops] &&
            store.filtersStore.filtersNumber !== 0
          ) {
            return null;
          } else {
            return (
              <Ticket
                ticket={ticket}
                currencyStore={currencyStore}
                order={() => order(Nester(ticket))}
              />
            );
          }
        })
      ) : (
        <div className="preloader"></div>
      )}
    </ul>
  );
});
