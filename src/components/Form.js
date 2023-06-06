import { useState, useEffect } from "react";

function Form() {
  const initialValues = { fistName: "", lastName: "", email: "", text: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.text) {
      errors.text = "You must write something at least";
    }
    return errors;
  };

  return (
    <>
      <form
        style={{ maxWidth: "80%", margin: "0 auto" }}
        className="form-group"
        onSubmit={handleSubmit}
      >
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <input
              style={{ border: formErrors.firstName ? "1px solid red" : "" }}
              className="form-control"
              id="exampleFormControlInput1"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleChange}
            />
            <p className="red">{formErrors.firstName}</p>
          </div>
          {""}
          <div className="field">
            <input
              style={{ border: formErrors.lastName ? "1px solid red" : "" }}
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <p className="red">{formErrors.lastName}</p>
          <div className="field">
            <input
              style={{ border: formErrors.email ? "1px solid red" : "" }}
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="red">{formErrors.email}</p>

          <div className="form-group">
            <textarea
              style={{ border: formErrors.text ? "1px solid red" : "" }}
              onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your textarea"
            >
              {formValues.text}
            </textarea>
            <p className="red">{formErrors.text}</p>
          </div>

          <button type="submit" className="btn btn-block btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
