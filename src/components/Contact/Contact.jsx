import css from './Contact.module.css';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { IoPersonSharp } from 'react-icons/io5';

export const Contact = ({ iniatial: { id, name, number }, delateContact }) => {
  return (
    <>
      <div className={css.div}>
        <li className={css.li}>
          <div>
            <p className={css.items}>{name}</p>
            <p className={css.items}>{number}</p>
          </div>
          <button className={css.button} onClick={() => delateContact(id)}>
            Delate
          </button>
        </li>
      </div>
    </>
  );
};
