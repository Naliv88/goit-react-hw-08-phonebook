import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import style from './App.module.css';

const App = () => {

  return (
    <div className={style.section}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter  />
      <ContactList />
    </div>
  );
};

export default App;


// @sydorenko_anna