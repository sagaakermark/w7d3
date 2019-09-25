import React from "react";

const ContactList = props => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {props.contacts.map(contact => {
          //   `contact` is the element in the array
          return (
            <tr key={contact.id}>
              <td>
                <img
                  height="100px"
                  src={contact.pictureUrl}
                  alt={contact.name}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => props.deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
