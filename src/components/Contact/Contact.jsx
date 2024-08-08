import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <p className={s.contactParagraph}>
        {contact.name}: {contact.number}
      </p>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={s.contactButton}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
