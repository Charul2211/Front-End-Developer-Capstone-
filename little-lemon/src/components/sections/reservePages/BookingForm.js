import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
    firstname: Yup.string()
    .required("Field is mandatory"),
    lastname: Yup.string()
    .required("Field is mandatory"),
    phoneNumber: Yup.string()
    .required("Field is mandatory"),
    numberPeople: Yup.string()
    .required("Field is mandatory"),
    date: Yup.string()
    .required("Field is mandatory"),
    time: Yup.string()
    .required("Field is mandatory"),
    occasion: Yup.string()
    .required("Field is mandatory"),
    perferences: Yup.string()
    .required("Field is mandatory"),
    comment: Yup.string()
    .required("Field is mandatory"),    
});


class ReservationForm extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 table-reservation-form">
            <Formik
              initialValues={{ email: "", firstname: "",lastname:"",numberPeople:"",date:"",time:"",occasion:"",perferences:"",comment:"" }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                console.log(values);
                alert("Form is validated! Submitting the form...");
              }}
            >
              {({ touched, errors, isSubmitting, values }) =>
                !isSubmitting ? (
                  <div>
                    <div className="row mb-5">
                      <div className="col-lg-12 text-center">
                        <h1 className="mt-5">Table reservation Form</h1>
                      </div>
                    </div>
                    <Form>

                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor="firstname">FirstName</label>
                          <Field
                            type="text"
                            name="firstname"
                            placeholder="Enter firstname"
                            autocomplete="off"
                            className={`mt-2 form-control
						              ${touched.firstname && errors.firstname ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component="div"
                            name="firstname"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label htmlFor="lastname">LastName</label>
                          <Field
                            type="text"
                            name="lastname"
                            placeholder="Enter LastName"
                            autocomplete="off"
                            className={`mt-2 form-control
						              ${touched.lastname && errors.lastname ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component="div"
                            name="lastname"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Email</label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            autocomplete="off"
                            className={`mt-2 form-control
						              ${touched.email && errors.email ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component="div"
                            name="email"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <Field
                            type="text"
                            name="phoneNumber"
                            placeholder="(xxx)-xxx-xxxx"
                            autocomplete="off"
                            className={`mt-2 form-control
						              ${touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component="div"
                            name="phoneNumber"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor="numberPeople">Number of People</label>
                          <Field
                            type="text"
                            name="numberPeople"
                            placeholder="Enter number of people"
                            autocomplete="off"
                            className={`mt-2 form-control
						              ${touched.numberPeople && errors.numberPeople ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component="div"
                            name="numberPeople"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label htmlFor="date">Select Date</label>
                          <Field

                            type="date"
                            id="date"
                            required
                            name="date"
                            placeholder="Enter number of people"
                            autocomplete="off"
                            className={`mt-2 form-control
						              ${touched.date && errors.date ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component="div"
                            name="date"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor="time">Select Time</label>
                          <Field
                            type="time"
                            id="time"
                            required
                            name="time"
                            placeholder="Select time slot"
                            autocomplete="off"
                            className={`mt-2 form-control
						              ${touched.time && errors.time ? "is-invalid" : ""}`}
                          />

                          <ErrorMessage
                            component="div"
                            name="time"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label htmlFor="occasion">Occasion</label>

                          <Field as="select" name="occasion" required className={`mt-2 form-control
						              ${touched.occasion && errors.occasion ? "is-invalid" : ""}`}>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            <option>Other</option>
                          </Field>

                          <ErrorMessage
                            component="div"
                            name="occasion"
                            className="invalid-feedback"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor="perferences">Seating Perferences</label>

                          <Field as="select" name="perferences" required className={`mt-2 form-control
						              ${touched.perferences && errors.perferences ? "is-invalid" : ""}`}>
                            <option>None</option>
                            <option>Indoors</option>
                            <option>Outdoor (Patio)</option>
                            <option>Outdoor (Sidewalk)</option>
                          </Field>

                          <ErrorMessage
                            component="div"
                            name="perferences"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label htmlFor="comment" className="mt-3">
                            Additional Comments
                          </label>
                          <Field
                            type="text"
                            name="comment"
                            placeholder="Enter comment"
                            className={`mt-2 form-control
						              ${touched.comment && errors.comment
                                ? "is-invalid"
                                : ""
                              }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="comment"
                            className="invalid-feedback"
                          />
                        </div>

                        <div className="">
                          <p>
                          Note: You cannot edit your reservation after submission. Please
                          double-check your answer before submitting your reservation request.
                          </p>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4"
                      >
                        Book Table
                      </button>
                    </Form>
                  </div>
                ) : (
                  <div>
                    <h1 className="p-3 mt-5">Form Submitted</h1>

                    <div className="alert alert-success mt-3">
                      Thank for your connecting with us. Here's what we got from
                      you !
                    </div>
                    <ul className="list-group">
                      <li className="list-group-item">Email: {values.email}</li>                                            
                    </ul>

                    <br></br>
                      <Link className="action-button" to="/confirmation">
                      confirmation
                      </Link>
                  </div>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservationForm;
