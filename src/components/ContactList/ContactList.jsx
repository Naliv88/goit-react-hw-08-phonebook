import React from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { delet } from 'redux/slice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactsList = filter ? filteredContacts() : contacts;

  return (
    
    <ul className={style.list}>
      {contactsList.map(contact => {
        return (
          <li className={style.listItem} key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              className={style.btnDelete}
              onClick={() => dispatch(delet(contact.id))}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
