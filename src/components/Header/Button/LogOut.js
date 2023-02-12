import { Button, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../redux/User/auth-operations';

const LogOut = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user.name);

  return (
    <Flex align={'center'} gap={'10px'}>
      <p>Hello, {userName}</p>
      {/* <Text>Hello, Nalivoooooooo@gmail.com</Text> */}

      <Button
        mr={'15px'}
        bg={'blue.400'}
        color={'white'}
        _hover={{
          bg: 'blue.500',
        }}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
      <button className="logoutBtn"></button>
    </Flex>
  );
};
export default LogOut;
