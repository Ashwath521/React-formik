import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../FormikPart-1/TextError";

function RadioButton(props) {
  const { label, name, option, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      {/* //render props method always function as it's children 
      // While creating checkbox or radio button name attribute value same for all radion button type field
      it treated as group */}
      <Field name={name}>
        {({ field }) => {
          return option.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default RadioButton;
