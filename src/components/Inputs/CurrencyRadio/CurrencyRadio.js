import "./CurrencyRadio.scss";

const { observer } = require("mobx-react");

export const CurrencyRadio = observer((props) => {
  const store = props.store.currencyStore;

  return (
    <div className="CurrencyRadio_btn">
      <input
        id={props.id}
        type="radio"
        name="currencyRadio"
        onClick={() => store.ChangeCurrentCurrency(props.currency)}
        checked={store.CurrentCurrency === props.currency}
      />
      <label htmlFor={props.id}>{props.currency}</label>
    </div>
  );
});
