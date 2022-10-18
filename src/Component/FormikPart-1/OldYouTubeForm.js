import React from "react";
import { useFormik } from "formik";
import "./YouTube.css";
import * as Yup from "yup";

function OldYouTubeForm() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("form data", values);
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .length(5, "The length accept only 5 ")
      .required("Required!"),
    // name:Yup.string().length(4).Required('This is the minimum required'),
    email: Yup.string().email("Invalid email format").required("Required!"),
    channel: Yup.string().required("Required!"),
  });
  // const validate = (values) => {
  //   let errors = {};

  //   if (!values.name) {
  //     errors.name = "Required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //     !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
  //       values.email
  //     )
  //   ) {
  //     errors.email = "Invalid email address";
  //   }
  //   if (!values.channel) {
  //     errors.channel = "Required";
  //   }
  //   return errors;
  // };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("validate", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="field">{formik.errors.name}</div>
        ) : null}

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="field">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          value={formik.values.channel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div className="field">{formik.errors.channel}</div>
        ) : null}
        {/*  */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYouTubeForm;
