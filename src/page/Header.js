import { Flex, Spacer } from '@chakra-ui/react';
import { Suspense } from 'react';
import {  NavLink, Outlet } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import LogOut from '../components/Header/Button/LogOut';
import LogIn from '../components/Header/Button/LogIn';
import { useSelector } from 'react-redux';

// import { Link as ReachLink } from "@reach/router"

export default function SimpleCard() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <Flex bg={'orange.200'} align={'center'} gap={'10px'} color={'blue.400'}>
        
        <NavLink to="/">Home</NavLink>

        <NavLink to="/phonebook" paddingLeft="10px">
          Phonebook
        </NavLink>

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
