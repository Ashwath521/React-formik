import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../FormikPart-1/TextError";

function Input(props) {
  const { label, name, type } = props;

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} type={type} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Input;
