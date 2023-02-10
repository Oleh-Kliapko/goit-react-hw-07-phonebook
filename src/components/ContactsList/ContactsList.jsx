import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { removeContact } from 'redux/contactSlice';
import { Item, DeleteButton } from './ContactsList.styled';

const getFilteredContacts = (contacts, filterValue) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );
};

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const filteredContacts = getFilteredContacts(contacts, filterValue);

  const dispatch = useDispatch();

  return filteredContacts.map(({ id, name, number }) => (
    <Item key={id}>
      {name}: {number}
      <DeleteButton type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </DeleteButton>
    </Item>
  ));
};
