import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './Contacts/ContactForm';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';
import '../index.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name === '' || number === '') {
      alert('Please fill in all fields.');
      return;
    }

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    setContacts((prevContacts) => [contact, ...prevContacts]);
    setName('');
    setNumber('');
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = (contactIndex) => {
    setContacts((prevContacts) =>
      prevContacts.filter((_, index) => index !== contactIndex)
    );
  };

  const addContact = (newContact) => {
    const isDuplicateName = contacts.some(
      (contact) => contact.name === newContact.name
    );

    if (isDuplicateName) {
      console.log('Це імя вже існує');
      return;
    }

    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onSubmit={addContact}
      />

      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filterContacts()} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
