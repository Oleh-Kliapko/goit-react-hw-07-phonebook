import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import {
  WrapperPhonebook,
  WrapperContacts,
  Title,
  TitleContacts,
} from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';
import { Loader, Error } from 'utils';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <WrapperPhonebook>
        <Title>Phonebook</Title>
        <ContactForm />
        {!isLoading && !error && (
          <>
            <TitleContacts>Contacts</TitleContacts>
            <Filter />
          </>
        )}
        {isLoading && !error && <Loader />}
        {error && !isLoading && <Error />}
        <WrapperContacts>
          <ContactsList />
        </WrapperContacts>
      </WrapperPhonebook>
      <ToastContainer autoClose={3000} />
    </>
  );
};
