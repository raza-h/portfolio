import * as yup from "yup";

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  name: yup.string().trim().required().label("Name"),
  subject: yup.string().trim().required().label("Subject"),
  message: yup.string().trim().required().label("Message"),
  email: yup.string().email().required().label("Email"),
});
