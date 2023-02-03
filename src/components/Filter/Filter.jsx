import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { change } from 'redux/slice';

export const Filter = () => {

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = (evt) => dispatch(change(evt.target.value));

  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
        onChange={handleChange}
      />
    </>
  );
};

