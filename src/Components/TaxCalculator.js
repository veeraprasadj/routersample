import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

function TaxCalculator() {
  const initialValues = {
    principleAmount: 0,
    ir: 0,
    tenure: 0,
  };

  const validationSchema = Yup.object({
    principleAmount: Yup.number()
      .max(1000000, "Maximum 5 digits are allowed ")
      .min(10000, "Minimum value should be 10000")
      .required("Required"),
    ir: Yup.number()
      .min(1, "Mininum interest rate is 1")
      .max(50, "Maximum interest rate is 50")
      .required("Interest rate is required"),
    tenure: Yup.number()
      .min(1, "Minimum tenure is 1 year")
      .max(8, "Maximum tenure is 5 years")
      .required("Tenure is required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  console.log(formik.touched);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="principleAmount">Enter Principle Amount</label>
          <input
            type="number"
            className="form-control"
            id="principleAmount"
            name="principleAmount"
            placeholder="Principle Amount"
            value={formik.values.principleAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.principleAmount && formik.errors.principleAmount
            ? formik.errors.principleAmount
            : null}
        </div>
        <div className="form-group my-3">
          <label htmlFor="ir">Enter Interest Rate</label>
          <input
            type="number"
            className="form-control"
            id="ir"
            name="ir"
            placeholder="Interest Rate"
            value={formik.values.ir}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.ir && formik.errors.ir ? formik.errors.ir : null}
        </div>
        <div className="form-group my-3">
          <label htmlFor="tenure">Enter Tenure in Years</label>
          <input
            type="number"
            className="form-control"
            id="tenure"
            name="tenure"
            placeholder="Tenure in years"
            value={formik.values.tenure}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.tenure && formik.errors.tenure
            ? formik.errors.tenure
            : null}
        </div>
        <div className="form-group mt-3">
          {/* <input type="submit">Calculate EMI</input> */}
          <input type="submit" value="Calculate EMI" />
        </div>
      </form>
    </>
  );
}

export default TaxCalculator;
