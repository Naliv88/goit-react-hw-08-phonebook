import { Text, Input, Box } from '@chakra-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change } from '../../redux/User/auth-slice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = evt => dispatch(change(evt.target.value));

  return (
    <Box textAlign={'center'} m={'10px'}>
      <Text>Find contacts by name</Text>
      <Input
        w={'30wh'}
        m={'10px'}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        onChange={handleChange}
        placeholder="Enter search"
      />
    </Box>
  );
};
