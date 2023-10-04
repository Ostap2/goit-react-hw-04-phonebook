import React, { useState } from 'react';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || number === '') {
      alert('Please fill in all fields.');
      return;
    }

    onSubmit({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          autoComplete="off"
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="[0-9\-]+"
          title="Phone number must be digits"
          required
          autoComplete="off"
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
