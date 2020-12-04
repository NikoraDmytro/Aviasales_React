import { flow, makeAutoObservable } from "mobx";
import Axios from "axios";

const NeededToUpgrade = (young, old) => {
  if (young.length !== old.length) return true;
  young.forEach((value, index) => {
    if (value._id !== old[index]._id) return true;
  });
  return false;
};

const ServerAddress = `http://localhost:5000/`;

class TicketsStore {
  constructor() {
    this.tickets = [];
    this.isLoading = true;
    this.UpdateTicketsList = this.UpdateTicketsList.bind(this);
    makeAutoObservable(this);
  }

  UpdateTicketsList = flow(function* () {
    this.isLoading = true;
    try {
      const Tickets = yield Axios.get(ServerAddress);

      if (NeededToUpgrade(this.tickets, Tickets.data)) {
        this.tickets = Tickets.data;
        this.isLoading = false;
      }
    } catch (err) {
      console.log(err);
    }
  });
}

export default TicketsStore;
