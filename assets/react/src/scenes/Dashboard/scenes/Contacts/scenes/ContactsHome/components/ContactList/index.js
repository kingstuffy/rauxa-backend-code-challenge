import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import './ContactList.css';


const ContactList = (props) => {
  const { data } = props;
  return (
    <div className="contact-list">
      <Table responsive>
        <thead>
        <tr>
          <th className="contact-list__th">SN</th>
          <th className="contact-list__th contact-list__th--avatar">Avatar</th>
          <th className="contact-list__th">Name</th>
          <th className="contact-list__th">Phone number</th>
          <th className="contact-list__th">Created</th>
        </tr>
        </thead>
        <tbody>
        {
          data.map((item, index) =>
            (
              <tr key={index}>
                <td className="contact-list__td">{item.id}</td>
                <td className="contact-list__td">
                  <img className="contact-list__img" src={item.imgUrl}/>
                </td>
                <td className="contact-list__td">{item.name}</td>
                <td className="contact-list__td">{item.phone}</td>
                <td className="contact-list__td">
                  {new Date(item.createdAt).toDateString()},
                  {' '}
                  {new Date(item.createdAt).toTimeString()}
                </td>
              </tr>
            ))
        }
        </tbody>
      </Table>
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
