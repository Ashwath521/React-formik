import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import "./YouTube.css";
import * as Yup from "yup";
import TextError from "./TextError";
import { useState } from "react";

function YouTube() {
  const [formValues, setFormValues] = useState(null);
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comment: "",
    address: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
    phNumber: [""],
  };

  const LoadValues = {
    name: "steve",
    email: "ash@example.com",
    channel: "code",
    comment: "nothing",
    address: "343 bsker",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
    phNumber: [""],
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("form data", values);
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .length(5, "The length accept only 5 ")
      .required("Required!"),
    email: Yup.string().email("Invalid email format").required("Required!"),
    channel: Yup.string().required("Required!"),
    // comment: Yup.string().required("Required!"),
    address: Yup.string().required("Required!"),
    social: Yup.object().shape({
      facebook: Yup.string().required("Facebook username is required"),
      twitter: Yup.string().required("LinkedIn username is required"),
    }),
    // phoneNumbers: Yup.array(),
    // "phoneNumbers[0]": Yup.string().required("Required Array! 1"),
    // "phoneNumbers[1]": Yup.string().required("Required Array! 2"),
  });

  const validateC = (value) => {
    let error;
    if (!value) {
      error = "Required comments";
    }

    return error;
  };

  return (
    <Formik
      initialValues={formValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
      enableReinitialize
    >
      {/* Manually trigger validation time we wrap our entire form top level of the formik */}
      {(props) => {
        console.log(props);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <FastField type="text" name="name" id="name" />
              <div className="error">
                <ErrorMessage name="name" component={TextError} />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="email" name="email" id="email" />
              <div className="error">
                <ErrorMessage name="email">
                  {(props) => {
                    return <div className="error">{props}</div>;
                  }}
                </ErrorMessage>
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" name="channel" id="channel" />
              <div className="error">
                <ErrorMessage name="channel" />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="comment">Comment</label>
              <Field
                as="textarea"
                name="comment"
                id="comment"
                validate={validateC}
              />
              <div className="error">
                <ErrorMessage name="comment" />
              </div>
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props) => {
                  const { field, meta } = props;
                  console.log("render field");

                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">FaceBook</label>
              <Field type="text" name="social.facebook" id="facebook" />
              <div className="error">
                <ErrorMessage name="social.facebook" />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter</label>
              <Field type="text" name="social.twitter" id="twitter" />
              <div className="error">
                <ErrorMessage name="social.twitter" />
              </div>
            </div>
            <div className="form-control">
              <label htmlFor="primary">Primary Phone Number</label>
              <Field type="text" name="phoneNumbers[0]" id="primary" />
            </div>
            <div className="form-control">
              <label htmlFor="secondary">secondary Phone Number</label>
              <Field type="text" name="phoneNumbers[1]" id="secondary" />
            </div>
            {/* <div>
              <label htmlFor="phnumber">PhNumber</label>
              <FieldArray id="phnumber" name="phNumber">
                {(props) => {
                  console.log(props);
                  const { form, push, remove } = props;
                  const { values } = form;
                  const { phNumber } = values;

                  return (
                    <div>
                      {phNumber.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumber[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}

                          <button type="button" onClick={() => push("")}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
            </div> */}
            {/* <button
              type="button"
              onClick={() => props.validateField("comment")}
            >
              Validate Comments
            </button>
            <button type="button" onClick={() => props.validateForm()}>
              Validate all
            </button>
            <button
              type="button"
              onClick={() => props.setFieldTouched("comment")}
            >
              SetFieldTouched
            </button>
            <button
              type="button"
              onClick={() =>
                props.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comment: true,
                })
              }
            >
              SetTouched
            </button> */}
            <button type="button" onClick={() => setFormValues(LoadValues)}>
              LoadValues
            </button>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YouTube;
