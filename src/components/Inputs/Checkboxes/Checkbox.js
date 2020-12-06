export const Checkbox = (props) => {
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
