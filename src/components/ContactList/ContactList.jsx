import React, { useEffect } from 'react';
import { Audio } from 'react-loader-spinner';
// import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/User/contact-slice';
import {
  Button,
  Center,
  Flex,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import { fetchContacts, deleteContact } from 'redux/User/contact-operations';

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
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
      {contactsList.length ? (
        <OrderedList paddingLeft={'auto'}>
          {contactsList.map(contact => {
            return (
              <Center key={contact.id}>
                <ListItem padding={'5px'}>
                  <Flex justifyContent={'space-between'}>
                    <Text>
                      {contact.name}: {contact.number}
                    </Text>
                    <Button
                      marginLeft={'5px'}
                      size="xs"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{
                        bg: 'blue.500',
                      }}
                      type="button"
                      onClick={() => dispatch(deleteContact(contact.id))}
                    >
                      Delete
                    </Button>
                  </Flex>
                </ListItem>
              </Center>
            );
          })}
        </OrderedList>
      ) : (
        <Text>Empty</Text>
      )}
    </>
  );
};
