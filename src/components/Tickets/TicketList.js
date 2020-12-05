import { observer } from "mobx-react";
import React from "react";
import { Ticket } from "./Ticket.js";

export const TicketsList = observer(({ store }) => {
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
            return <Ticket ticket={ticket} currencyStore={currencyStore} />;
          }
        })
      ) : (
        <div className="preloader"></div>
      )}
    </ul>
  );
});
