import { ContactListItem } from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilterList } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterList = useSelector(selectFilterList);

  const getFilteredContacts = () => {
    let normalizedFilter = filterList.toLowerCase();
    let filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  const visibleContacts = getFilteredContacts();

  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ul>
  );
};
