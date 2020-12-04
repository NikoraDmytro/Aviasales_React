import FiltersStore from "./FiltersStore.js";
import TicketsStore from "./TicketsStore.js";

class RootStore {
  constructor() {
    this.filtersStore = new FiltersStore();
    this.ticketsStore = new TicketsStore();
  }
}

export const rootStore = new RootStore();
