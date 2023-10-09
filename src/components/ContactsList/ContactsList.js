import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Contact, ListItem, Button } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getExistingContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.list.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredcontacts = getExistingContacts();

  return (
    <List>
      {filteredcontacts.map(contact => (
        <Contact key={contact.id}>
          <ListItem>
            {contact.name}:{contact.phone}
          </ListItem>
          <Button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </Button>
        </Contact>
      ))}
    </List>
  );
};
