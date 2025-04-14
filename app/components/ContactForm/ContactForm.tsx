"use client";
import { Formik, FormikErrors } from "formik";
import {
  Button,
  FormWrapper,
  SendError,
  StyledForm,
} from "./ContactForm.styles";
import FormInputField from "../FormInputField/FormInputField";
import TextAreaFormField from "../TextAreaFormField/TextAreaFormField";
import { sendEmail } from "@/app/lib/sendgrid";
import { useEffect, useState } from "react";
import { SubmitStatus } from "@/app/types/types";
import SubmitButtonAnimation from "../SubmitButtonAnimation/SubmitButtonAnimation";

const NAME_FIELD = "name";
const EMAIL_FIELD = "email";
const MESSAGE_FIELD = "message";

type MyFormValues = {
  [NAME_FIELD]: string;
  [EMAIL_FIELD]: string;
  [MESSAGE_FIELD]: string;
};

const ContactForm = () => {
  const initialValues: MyFormValues = {
    [NAME_FIELD]: "",
    [EMAIL_FIELD]: "",
    [MESSAGE_FIELD]: "",
  };

  const [status, setStatus] = useState<SubmitStatus>("NONE");

  useEffect(() => {
    if (status === "ERROR" || status === "SUCCESS") {
      setTimeout(() => {
        setStatus("NONE");
      }, 5000);
    }
  }, [status]);

  const validate = (values: MyFormValues) => {
    const errors = {} as FormikErrors<MyFormValues>;
    const { name, email, message } = values;

    if (!name.length) errors[NAME_FIELD] = "This field is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) && email.length)
      errors[EMAIL_FIELD] = "Invalid e-mail";
    if (!message.length) errors[MESSAGE_FIELD] = "This field is required";
    return errors;
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        validate={(values) => validate(values)}
        onSubmit={async (values) => {
          const { name, message, email } = values;

          setStatus("PENDING");

          const result = await sendEmail(name, message, email);

          setStatus(result);
        }}
      >
        <StyledForm>
          <FormInputField
            name={NAME_FIELD}
            label={"Name"}
            placeholder={"Name (required)"}
            required={true}
          />
          <FormInputField
            name={EMAIL_FIELD}
            label={"E-mail"}
            type={"e-mail"}
            placeholder={"E-mail"}
          />
          <TextAreaFormField
            name={MESSAGE_FIELD}
            label={"Your message"}
            placeholder={"Your message (required)"}
            required={true}
          />

          <Button
            type={"submit"}
            disabled={status === "PENDING"}
            $isDisabled={status !== "NONE"}
          >
            <SubmitButtonAnimation status={status} />
          </Button>
          {status === "ERROR" && (
            <SendError>Error occurred... Please try again</SendError>
          )}
        </StyledForm>
      </Formik>
    </FormWrapper>
  );
};

export default ContactForm;
