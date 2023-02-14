import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Phonebook } from '../page/Phonebook/Phonebook';
import SimpleCard from '../page/Header';
import Register from './Header/Registry';
import SingIn from './Header/SingIn';
import {PrivateRoute} from './Route/PrivatRoute';
import {PublicRoute} from './Route/PublicRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/User/auth-operations';
import { HomePage } from 'page/HomePage/HomePage';
import NotFoundPage from 'page/NotFoundPage/NotFoundPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
<>
      <Routes>
        <Route path="/" element={<SimpleCard />}>
          <Route index element={<Navigate to="home"></Navigate>} />

          <Route path="home" element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <SingIn />
              </PublicRoute>
            }
          />
          <Route
            path="phonebook"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </>


    // <>
    //   <Routes>
    //     <Route path="/" element={<SimpleCard />}>
    //       <Route index element={<SingIn />} />

    //       {/* <PrivateRoute path="/phonebook"><Phonebook /></PrivateRoute> */}

    //       <Route path="/phonebook" element={<Phonebook />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="/login" element={<SingIn />} />
    //       <Route path="*" element={<h1> False page </h1>} />
    //     </Route>
    //   </Routes>
    // </>
  );
};

export default App;

