import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ iniatial, delateContact }) => {
  return (
    <ul className={css.list}>
      {iniatial.map(el => (
        <Contact key={el.id} iniatial={el} delateContact={delateContact} className={css.li} />
      ))}
    </ul>
  );
};
