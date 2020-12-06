import { observer } from "mobx-react";

import { Checkbox } from "./Checkbox.js";

export const StopsCheckbox = observer((props) => {
  const filtersStore = props.store.filtersStore;

  return (
    <Checkbox
      id={props.id}
      onChange={() => {
        filtersStore.toggleFilter(props.id);
      }}
      checked={filtersStore.filters[props.id]}
    >
      {props.children}
    </Checkbox>
  );
});
