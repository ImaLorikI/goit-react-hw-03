import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { SearchBar } from './SearchBar/SearchBar';
import { ContactList } from './ContactList/ContactList';
export const App = () => {
  const initial = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [nameFilter, setNameFilter] = useState('');
  const [data, setData] = useState(JSON.parse(localStorage.getItem('dataContacts')) ?? initial);
  useEffect(() => {
    localStorage.setItem('dataContacts', JSON.stringify(data));
  }, [data]);

  const setInputValue = evt => {
    setNameFilter(evt.target.value);
  };

  const SearchContacts = data.filter(item =>
    item.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
  const deleteContact = id => {
    setData(prevContacts => prevContacts.filter(item => item.id !== id));
  };
  const AddContact = contact => {
    setData(prevContacts => [...prevContacts, contact]);
  };
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm AddContact={AddContact} />
      <SearchBar values={nameFilter} change={setInputValue} />
      <ContactList iniatial={SearchContacts} delateContact={deleteContact} />
    </>
  );
};
