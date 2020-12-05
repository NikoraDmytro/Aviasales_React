import { flow, makeAutoObservable } from "mobx";

const CurrencyIcons = {
  RUB: "₽",
  USD: "$",
  EUR: "€",
};

export default class CurrencyStore {
  constructor(RootStore) {
    this.RootStore = RootStore;
    this.ExchangeRates = {};
    this.CurrentCurrency = "RUB";
    this.CurrencyIcon = "₽";
    this.fetchExchangeRates = this.fetchExchangeRates.bind(this);
    makeAutoObservable(this);
  }

  fetchExchangeRates = flow(function* () {
    try {
      const response = yield fetch("https://api.exchangeratesapi.io/latest");
      const json = yield response.json();
      if (this.ExchangeRates["RUB"] === undefined) {
        this.ExchangeRates = { ...json.rates, EUR: 1 };
      }
    } catch (err) {
      console.log(err);
    }
  });

  ChangeCurrentCurrency(currency) {
    this.CurrentCurrency = currency;
    this.CurrencyIcon = CurrencyIcons[currency];
  }

  get Multiplier() {
    return parseFloat(
      this.ExchangeRates[this.CurrentCurrency] / this.ExchangeRates["RUB"]
    ).toFixed(2);
  }
}
