import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { Card, CardBody, Flex, Text } from '@chakra-ui/react';

export const Phonebook = () => {
  return (
    <Flex
      marginLeft={'auto'}
      marginRight={'auto'}
      w={'350px'}
      flexDirection={'column'}
      align={'center'}
    >
      <Card>
        <CardBody>
          <Text textAlign={'center'} fontSize={'32px'}>
            Phonebook
          </Text>
          <ContactForm />
        </CardBody>

        <CardBody>
          <Text textAlign={'center'} fontSize={'32px'}>
            Contacts
          </Text>
          <Filter />
          <ContactList />
        </CardBody>
      </Card>
    </Flex>
  );
};
