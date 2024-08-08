import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { addContact } from "./redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
