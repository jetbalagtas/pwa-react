import React, { useState } from 'react';
import Row from '../Row/Row';

export default function Greeting(props) {
  const [name, setName] = useState('Mary');
  const [surname, setSurName] = useState('Poppins');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurNameChange(e) {
    setSurName(e.target.value);
  }

  return (
    <section>
      <Row label="First Name">
        <input
          value={name}
          onChange={handleNameChange}
        />
      </Row>
      <Row label="Last Name">
        <input
          value={surname}
          onChange={handleSurNameChange}
        />
      </Row>
    </section>
  );
}
