import React from "react";
import FormControl from "./FormControl";

import { Formik, Form } from "formik";

import * as Yup from "yup";

function FormikContainer() {
  const dropdownOptions = [
    {
      key: "Select an option",
      value: "",
    },
    {
      key: "option1",
      value: "option1",
    },
    {
      key: "option2",
      value: "option2",
    },
    {
      key: "option3",
      value: "option3",
    },
  ];

  const radioOptions = [
    {
      key: "option 1",
      value: "rOption1",
    },
    {
      key: "option 2",
      value: "rOption2",
    },
    {
      key: "option 3",
      value: "rOption3",
    },
  ];

  const checkboxOptions = [
    {
      key: "option 1",
      value: "cOption1",
    },
    {
      key: "option 2",
      value: "cOption2",
    },
    {
      key: "option 3",
      value: "cOption3",
    },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    /* checkbox group control lets you pick multiple values we store
     the list of values in an array */
    checkboxOption: [],
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
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
          />
          <FormControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormControl
            control="select"
            label="Select a topic"
            name="selectOption"
            option={dropdownOptions}
          />
          <FormControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            option={radioOptions}
          />
          <FormControl
            control="checkbox"
            label="checkbox Topic"
            name="checkboxOption"
            option={checkboxOptions}
          />
          <button type="">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
