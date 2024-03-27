import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleNewsletterChange = (event) => {
    setNewsletter(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", { firstName, lastName, newsletter });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="newsletter"
          checked={newsletter}
          onChange={handleNewsletterChange}
        />
        <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
