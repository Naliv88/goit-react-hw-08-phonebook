import { Flex, Box, Spacer } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import LogOut from '../components/Header/Button/LogOut';
import LogIn from '../components/Header/Button/LogIn';
import { useSelector } from 'react-redux';

export default function SimpleCard() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Flex bg={'tomato'}>
        <Box p="4" bg="blue.400">
          LOGO
        </Box>
        <Spacer />
        {isLoggedIn ? <LogOut /> : <LogIn />}
      </Flex>
      <Suspense
        fallback={
          <ThreeCircles
            height="100"
            width="100"
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
