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
      </div>
    </form>
  );
}
