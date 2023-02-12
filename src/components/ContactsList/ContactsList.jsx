import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';
import { Item, DeleteButton } from './ContactsList.styled';
import { deleteContact } from 'redux/operations';

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

  return filteredContacts.map(({ id, name, phone }) => (
    <Item key={id}>
      {name}: {phone}
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </Item>
  ));
};
