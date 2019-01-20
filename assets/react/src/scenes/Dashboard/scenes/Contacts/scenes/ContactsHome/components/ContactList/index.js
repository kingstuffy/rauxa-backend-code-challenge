import React from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';


const ContactList = (props) => {
  const { data } = props;
  return (
    <div>
      <ul className="list">
        {
          data.map(item =>
            (
              <div>
                {item.phone}
              </div>
            ))
        }
      </ul>
    </div>
  );
};

ContactList.defaultProps = {
  data: [],
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ContactList;
