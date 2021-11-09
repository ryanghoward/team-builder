import React from "react";

export default function PersonForm(props) {
  const { values, update, submit } = props;

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    update(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form className='personForm' onSubmit={onSubmit}>
      <div className='inputs'>
        <label>
          Username:
          <input
            type='text'
            name='username'
            value={values.username}
            onChange={onChange}
            placeholder='Enter a Username'
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={onChange}
            placeholder='Enter your Email'
          />
        </label>
        <label>
          Role:
          <select name='role' value={values.role} onChange={onChange}>
            <option value=''>Select a role</option>
            <option value='Dumbass'>Dumbass</option>
            <option value='Shithead'>Shithead</option>
            <option value='Retard'>Retard</option>
            <option value='Dumbfuck'>Dumbfuck</option>
            <option value='Idiot'>Idiot</option>
          </select>
        </label>
      </div>
    </form>
  );
}
