import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function TaxCalculator() {
  const initialValues = {
    principleAmount: 0,
    ir: 0,
    tenure: 0,
  };

  const validationSchema = Yup.object({
    principleAmount: Yup.number().required("Required"),
    ir: Yup.number().required("Interest rate is required"),
    tenure: Yup.number().required("Tenure is required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>TaxCalculator</div>
        <div className="form-group">
          <label htmlFor="principleAmout">PrincipleAmount</label>
          <Field
            type="number"
            name="principleAmount"
            id="principleAmount"
            className="form-control"
          ></Field>
          <ErrorMessage name="number" />
        </div>
        <div className="form-group">
          <label htmlFor="ir">Interest Rate</label>
          <Field
            type="number"
            name="ir"
            id="ir"
            className="form-control"
          ></Field>
          <ErrorMessage name="ir" />
        </div>
        <div className="form-group">
          <label htmlFor="tenure">Tenure in years</label>
          <Field
            type="number"
            name="tenure"
            id="tenure"
            className="form-control"
          ></Field>
          <ErrorMessage name="tenure" />
        </div>
        <div>
          <input type="submit">Calculate</input>
        </div>
      </Form>
    </Formik>
  );
}

export default TaxCalculator;
