import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { Item, DeleteButton } from './ContactsList.styled';
import { deleteContact } from 'redux/operations';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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
