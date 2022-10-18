import React from "react";
import FormControl from "./FormControl";

import { Formik, Form } from "formik";

import * as Yup from "yup";

function FormikContainer() {
  const initialValues = {
    email: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <Form>
          <FormControl
            control="input"
            type="email"
            label="Email"
            name="email"
          ></FormControl>
          <button type="">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
