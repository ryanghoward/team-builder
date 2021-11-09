import React from "react";

function Person(props) {
  const { details } = props;

  return (
    <div className='personContainer'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}

export default Person;
