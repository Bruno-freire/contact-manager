import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';
import { addContact, editContact, removeContact } from '../redux/contactsSlice';
import { RootState, AppDispatch } from '../redux/store';
import { Contact } from '../redux/contactsSlice';

const ListContainer = styled.div`
  margin-top: 20px;
`;

const AddButton = styled.button`
  margin-bottom: 10px;
  background: #007bff;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch<AppDispatch>();

  const [editingContact, setEditingContact] = useState<Contact | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleAddClick = () => {
    setEditingContact(null);
    setShowForm(true);
  };

  const handleEdit = (contact: Contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const handleSubmit = (contact: Contact) => {
    if (editingContact) {
      dispatch(editContact(contact));
    } else {
      contact.id = Date.now();
      dispatch(addContact(contact));
    }
    setShowForm(false);
  };

  const handleRemove = (id: number) => {
    dispatch(removeContact(id));
  };

  return (
    <div>
      <AddButton onClick={handleAddClick}>Adicionar Contato</AddButton>
      {showForm && (
        <ContactForm
          initialData={editingContact}
          onSubmit={handleSubmit}
          onCancel={() => setShowForm(false)}
        />
      )}
      <ListContainer>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onEdit={() => handleEdit(contact)}
            onRemove={() => handleRemove(contact.id)}
          />
        ))}
      </ListContainer>
    </div>
  );
};

export default ContactList;
