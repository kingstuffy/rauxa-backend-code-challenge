import React from 'react';
import PropTypes from 'prop-types';
import './EmptyState.css';

const EmptyState = (props) => {
  const {
    image, text, buttonText, action,
  } = props;

  return (
    <div className="empty-state">
      <img src={image} alt="" />
      <h2>{text}</h2>
      {buttonText ?
        <button
          type="button"
          onClick={action}
        >
          {props.buttonText}
        </button> : null}
    </div>
  );
};

EmptyState.defaultProps = {
  image: '',
  text: '',
  buttonText: '',
  action: () => {},
};

EmptyState.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  action: PropTypes.func,
};

export default EmptyState;
