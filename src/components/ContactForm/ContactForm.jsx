import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/User/contact-operations';
// import style from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  function handleInput(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  }

  function submitForm(event) {
    event.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return;
    }
    dispatch(addContact({ name: name, number: number }));
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={submitForm}>
      <FormControl>
        <Flex margin={'30px'}>
          <FormLabel>Name</FormLabel>
          <Input
            w={'35wh'}
            placeholder="add name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInput}
          />
        </Flex>
      </FormControl>
      <FormControl>
        <Flex margin={'30px'}>
          <FormLabel>Phone</FormLabel>
          <Input
            w={'35wh'}
            placeholder="add phone"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInput}
          />
        </Flex>
        <Center>
          <Button bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
            size="sm"
            marginRight={'auto'}
            marginLeft={'auto'}
            type="submit"
          >
            Add contact
          </Button>
        </Center>
      </FormControl>
    </form>
  );
}

export default ContactForm;
