import { Field, FieldProps } from "formik";
import { FormLabel } from "../FormLabel/FormLabel.styles";
import { TextArea, TextAreaWrapper } from "./TextAreaFormField.styles";
import { Required } from "../FormInputField/FormInputField .styles";

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

const TextAreaFormField = ({ name, label, placeholder, required }: Props) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <TextAreaWrapper>
          <TextArea
            as={"textarea"}
            id={name}
            {...field}
            placeholder={placeholder}
            $withError={!!meta.error}
          />
          <FormLabel htmlFor={name}>
            {label}
            {required && <Required>*</Required>}
          </FormLabel>
        </TextAreaWrapper>
      )}
    </Field>
  );
};

export default TextAreaFormField;
