import FiltersStore from "./FiltersStore.js";
import TicketsStore from "./TicketsStore.js";
import CurrencyStore from "./CurrencyStore.js";

export default class RootStore {
  constructor() {
    this.filtersStore = new FiltersStore();
    this.ticketsStore = new TicketsStore();
    this.currencyStore = new CurrencyStore(this);
  }
}

export const rootStore = new RootStore();
