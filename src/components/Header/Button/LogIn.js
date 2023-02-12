import { Box, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  return (
    <>
      <Box p="4">
        <Button
          mr={'15px'}
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
        >
          <NavLink to="/register">Register</NavLink>
        </Button>
        <Button
          bg={'blue.400'}
          color={'white'}
          _hover={{
            bg: 'blue.500',
          }}
        >
          <NavLink to="/login">Log In</NavLink>
        </Button>{' '}
      </Box>
    </>
  );
};

export default LogIn;
