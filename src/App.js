import { rootStore } from "./stores/RootStore.js";
import { TicketsList } from "./components/Tickets/TicketList.js";
import { CurrencyRadio } from "./components/Inputs/CurrencyRadio.js";
import { AllCheckbox } from "./components/Inputs/Checkboxes/ShowAllCheckbox.js";
import { StopsCheckbox } from "./components/Inputs/Checkboxes/StopsCheckbox.js";

const Filters = () => {
  return (
    <div className="Filters">
      <AllCheckbox id="All" store={rootStore}>
        Все
      </AllCheckbox>
      <StopsCheckbox id="0" store={rootStore}>
        Без пересадок
      </StopsCheckbox>
      <StopsCheckbox id="1" store={rootStore}>
        1 пересадка
      </StopsCheckbox>
      <StopsCheckbox id="2" store={rootStore}>
        2 пересадки
      </StopsCheckbox>
      <StopsCheckbox id="3" store={rootStore}>
        3 пересадки
      </StopsCheckbox>
    </div>
  );
};

const CurrencySwitcher = () => {
  return (
    <div className="CurrencyRadio">
      <CurrencyRadio id="radioRub" store={rootStore} currency="RUB" />
      <CurrencyRadio id="radioUsd" store={rootStore} currency="USD" />
      <CurrencyRadio id="radioEur" store={rootStore} currency="EUR" />
    </div>
  );
};

function App() {
  return (
    <>
      <CurrencySwitcher />
      <Filters />
      <TicketsList store={rootStore} />
    </>
  );
}

export default App;
