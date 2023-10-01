// ContactForm.jsx
import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name === '' || number === '') {
      alert('Please fill in all fields.');
      return;
    }

    this.props.onSubmit({ ...this.state });

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
  type="text"
  id="name"
  name="name"
  value={name}
  onChange={this.handleChange}
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
  id="number"
  name="number"
  value={number}
  onChange={this.handleChange}
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
}

export default ContactForm;
