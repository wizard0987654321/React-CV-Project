import React, { useState } from "react";
import FormField from "../components/FormField";
import LayoutField from "../components/LayoutField";
import "./styles.css"

export default function CvForm() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });
  const [submittedForm, setSubmittedForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  function handleSubmit() {
    setSubmittedForm(true);
  }

  function editForm() {
    setSubmittedForm(false);
  }

  return (
    <div>
      {!submittedForm && (
        <section>
          <h2>General Information</h2>
          <FormField
            label="First Name"
            name="firstName"
            value={name.firstName}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Last Name"
            name="lastName"
            value={name.lastName}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Email"
            name="email"
            value={name.email}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Phone Number"
            name="phone"
            value={name.phone}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="School Name"
            name="schoolName"
            value={name.schoolName}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Title of Study"
            name="titleOfStudy"
            value={name.titleOfStudy}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Date of Study"
            name="dateOfStudy"
            value={name.dateOfStudy}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Company Name"
            name="companyName"
            value={name.companyName}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Position Title"
            name="positionTitle"
            value={name.positionTitle}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Main Responsibilities"
            name="responsibilities"
            value={name.responsibilities}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Date From"
            name="dateFrom"
            value={name.dateFrom}
            onChange={handleChange}
          />
          <br />
          <FormField
            label="Date Until"
            name="dateUntil"
            value={name.dateUntil}
            onChange={handleChange}
          />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </section>
      )}
      {submittedForm && (
        <>
          <LayoutField input={name.firstName} />
          <LayoutField input={name.lastName} />
          <LayoutField input={name.email} />
          <LayoutField input={name.phone} />
          <LayoutField input={name.schoolName} />
          <LayoutField input={name.titleOfStudy} />
          <LayoutField input={name.dateOfStudy} />
          <LayoutField input={name.companyName} />
          <LayoutField input={name.positionTitle} />
          <LayoutField input={name.responsibilities} />
          <LayoutField input={name.dateFrom} />
          <LayoutField input={name.dateUntil} />
          <button onClick={editForm}>Edit CV</button>
        </>
      )}
    </div>
  );
}
