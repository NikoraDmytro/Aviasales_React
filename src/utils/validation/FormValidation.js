import * as Yup from "yup";

export const FormValidation = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid Email Address"),
  passportNumber: Yup.string().required("Required"),
});
