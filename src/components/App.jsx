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

export const App = () => {
  return (
    <>
      <WrapperPhonebook>
        <Title>Phonebook</Title>
        <ContactForm />
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        <WrapperContacts>
          <ContactsList />
        </WrapperContacts>
      </WrapperPhonebook>
      <ToastContainer autoClose={3000} />
    </>
  );
};
