import { Form, Formik, useField } from "formik";
import "./OrderRegistrationForm.scss";
import { FormValidation } from "../../utils/validation/FormValidation.js";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.error && meta.touched ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const OrderRegistrationForm = ({ Ticket, Price }) => {
  return (
    <div className="ModalWindow">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          passportNumber: "",
        }}
        validationSchema={FormValidation}
        onSubmit={async ({ setSubmitting }) => {
          await setTimeout(() => {}, 2000);
          setSubmitting(false);
        }}
      >
        <Form>
          <h1>Order Registration</h1>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Black"
          />
          <TextInput
            label="Email"
            name="email"
            type="email"
            placeholder="John_Black3456@gmail.com"
          />
          <TextInput
            label="Phone"
            name="phone"
            type="tel"
            placeholder="493034343434"
          />
          <TextInput
            label="Passport Number"
            name="passportNumber"
            type="text"
            placeholder="344567"
          />

          <button type="submit">Купить за {Price}</button>
        </Form>
      </Formik>
    </div>
  );
};
