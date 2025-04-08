import { Field, FieldProps } from "formik";
import { Error, Required } from "./FormInputField .styles";
import { FormLabel } from "../FormLabel/FormLabel.styles";
import { StyledFormInput } from "../StyledFormInput/StyledFormInput.styles";
import { FormInputWrapper } from "../FormInputWrapper/FormInputWrapper.styles";

type Props = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

const FormInputField = ({
  name,
  type,
  placeholder,
  label,
  required,
}: Props) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <FormInputWrapper>
          <StyledFormInput
            id={name}
            type={type ? type : "text"}
            {...field}
            placeholder={placeholder}
            $withError={!!(meta.error && meta.touched)}
          />
          <FormLabel htmlFor={name}>
            {label}
            {required && <Required>*</Required>}
          </FormLabel>

          {meta.touched && meta.error && <Error>{meta.error}</Error>}
        </FormInputWrapper>
      )}
    </Field>
  );
};

export default FormInputField;
