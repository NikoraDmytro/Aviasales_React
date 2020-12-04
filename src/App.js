import { observer } from "mobx-react";

import { rootStore } from "./stores/RootStore.js";
import { TicketsList } from "./components/Tickets/TicketList.js";

const Filters = ({ store }) => {
  const filtersStore = store.filtersStore;

  const Checkbox = (props) => {
    const id = props.id;

    return (
      <>
        <input
          type="checkbox"
          name={`Checkbox${id}`}
          onChange={props.onChange}
          checked={props.checked}
        />
        <label htmlFor={`Checkbox${id}`}>{props.children}</label>
      </>
    );
  };

  const AllCheckbox = observer((props) => (
    <Checkbox
      id={props.id}
      onChange={() => filtersStore.clearFilters()}
      checked={!filtersStore.filtersNumber}
    >
      {props.children}
    </Checkbox>
  ));

  const StopsCheckbox = observer((props) => (
    <Checkbox
      id={props.id}
      onChange={() => {
        filtersStore.toggleFilter(props.id);
      }}
      checked={filtersStore.filters[props.id]}
    >
      {props.children}
    </Checkbox>
  ));

  return (
    <div className="Filters">
      <AllCheckbox id="All">Все</AllCheckbox>
      <StopsCheckbox id="0">Без пересадок</StopsCheckbox>
      <StopsCheckbox id="1">1 пересадка</StopsCheckbox>
      <StopsCheckbox id="2">2 пересадки</StopsCheckbox>
      <StopsCheckbox id="3">3 пересадки</StopsCheckbox>
    </div>
  );
};

function App() {
  return (
    <>
      <Filters store={rootStore} />
      <TicketsList store={rootStore} />
    </>
  );
}

export default App;
