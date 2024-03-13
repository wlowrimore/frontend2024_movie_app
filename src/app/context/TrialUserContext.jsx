'use client'

import { createContext, useContext, useState } from 'react';

const TrialUserContext = createContext();

export const TrialUserProvider = ({ children }) => {
  const [trialUser, setTrialUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    isChecked: false,
  });
  const [isChecked, setIsChecked] = useState(false);
  const [country, setCountry] = useState('');

  const addOrUpdateTrialUser = (name, value) => {
    setTrialUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked)
  }

  const handleSelectCountry = (e) => {
    setCountry(e.target.value)
  }

  const values = {
    trialUser,
    addOrUpdateTrialUser,
    isChecked,
    handleCheckboxChange,
    handleSelectCountry,
    country
  };

  return (
    <TrialUserContext.Provider value={values}>
      {children}
    </TrialUserContext.Provider>
  );
};

export const useTrialUser = () => {
  const context = useContext(TrialUserContext);
  if (!context) {
    throw new Error('useTrialUser must be used within a TrialUserProvider');
  }
  return context;
};