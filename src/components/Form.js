import { useState } from "react";

function Form() {
  const initialValues = { firstName: "", lastName: "", email: "", text: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    const { firstName, lastName, email, text } = formValues;
    e.preventDefault();
    if (!firstName || !lastName || !email || !text) {
      alert("Everything must be submitted");
      setFormErrors(validate(formValues));

      return;
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.text) {
      errors.text = "You must write something at least";
    }
    return errors;
  };

  return (
    <>
      <form
        style={{ maxWidth: "30%", margin: "0 auto", textAlign: "left" }}
        className="form-group"
        onSubmit={handleSubmit}
      >
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
            name="text"
            id="exampleFormControlTextarea1"
            rows="3"
            value={formValues.text}
            placeholder="Your textarea"
          ></textarea>
          <p className="red">{formErrors.text}</p>
        </div>

        <input type="submit" className="btn btn-success" />
      </form>
    </>
  );
}

export default Form;
