import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li id={id} className={css.contact_item}>
      <p className={css.contact}>
        {name}: <span>{phone}</span>
        <button
          className={css.btn}
          type="button"
          onClick={() => dispatch(deleteContact({ id }))}
        >
          Delete
        </button>
      </p>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};
