import "./Checkbox.scss";

export const Checkbox = (props) => {
  const id = props.id;

  return (
    <div className="StopsFilter">
      <input
        type="checkbox"
        name={`Checkbox${id}`}
        onChange={props.onChange}
        checked={props.checked}
      />
      <label htmlFor={`Checkbox${id}`}>{props.children}</label>
    </div>
  );
};
