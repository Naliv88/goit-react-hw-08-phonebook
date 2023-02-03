import React, { useEffect } from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { Watch } from 'react-loader-spinner';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const loading = useSelector(state => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactsList = filter ? filteredContacts() : contacts;

  return (
    <>
      {loading &&
      (
        <Watch
          height="80"
          width="80"
          radius="48"
          color="#0a0a23"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      <ul className={style.list}>
        {contactsList.map(contact => {
          return (
            <li className={style.listItem} key={contact.id}>
              <p>
                {contact.name}: {contact.phone}
              </p>
              <button
                className={style.btnDelete}
                onClick={() => dispatch(deleteContact(contact.id))}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
