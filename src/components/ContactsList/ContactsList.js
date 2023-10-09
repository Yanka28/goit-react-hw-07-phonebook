import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectVisibleContacts } from 'redux/selectors';
import { List, Contact, ListItem, Button } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredcontacts = useSelector(selectVisibleContacts);

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
