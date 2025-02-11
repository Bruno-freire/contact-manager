import React from 'react';
import styled from 'styled-components';
import { Contact } from '../redux/contactsSlice';

const ItemContainer = styled.div`
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  button {
    margin-left: 5px;
    padding: 5px 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const EditButton = styled.button`
  background: #ffc107;
  color: #fff;
`;

const RemoveButton = styled.button`
  background: #dc3545;
  color: #fff;
`;

interface ContactItemProps {
  contact: Contact;
  onEdit: () => void;
  onRemove: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit, onRemove }) => {
  return (
    <ItemContainer>
      <Info>
        <div>
          <strong>Nome:</strong> {contact.fullName}
        </div>
        <div>
          <strong>Email:</strong> {contact.email}
        </div>
        <div>
          <strong>Telefone:</strong> {contact.telephone}
        </div>
      </Info>
      <ButtonGroup>
        <EditButton onClick={onEdit}>Editar</EditButton>
        <RemoveButton onClick={onRemove}>Remover</RemoveButton>
      </ButtonGroup>
    </ItemContainer>
  );
};

export default ContactItem;
