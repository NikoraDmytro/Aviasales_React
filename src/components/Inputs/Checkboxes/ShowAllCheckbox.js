import { observer } from "mobx-react";

import { Checkbox } from "./Checkbox.js";

export const AllCheckbox = observer((props) => {
  const filtersStore = props.store.filtersStore;

  return (
    <Checkbox
      id={props.id}
      onChange={() => filtersStore.clearFilters()}
      checked={!filtersStore.filtersNumber}
    >
      {props.children}
    </Checkbox>
  );
});
