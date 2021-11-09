import React, { useState } from "react";
import "./App.css";

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

function App() {
  const [person, setPerson] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (input1, input2) => {
    setFormValues({ ...formValues, [input1]: input2 });
  };

  const submitForm = (e) => {
    const newPerson = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    setPerson(person.concat(newPerson));
    setFormValues(initialFormValues);
  };

  return (
    <div className='App'>
      <h1>Team Builder Form</h1>
    </div>
  );
}

export default App;
