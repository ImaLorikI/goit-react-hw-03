import css from './SearchBar.module.css';
import { useId } from 'react';
export const SearchBar = ({ values, change }) => {
  const searchId = useId();
  return (
    <div className={css.div}>
      <label className={css.label} htmlFor={searchId}> Find contact by name</label>
      <input className={css.input} type="text" values={values} id={searchId} onChange={change} />
    </div>
  );
};
