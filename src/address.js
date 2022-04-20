import React from 'react';

function Address(props) {
  let name = props.name;
  let sex = props.sex;
  let email = props.email;
  return (
    <div>
      <h3>Friend Profile</h3>
      <p>name : {name}</p>
      <p>sex : {sex}</p>
      <p>email : {email}</p>
    </div>
  );
}

export default Address;
