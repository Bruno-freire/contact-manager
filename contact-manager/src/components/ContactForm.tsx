import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Contact } from '../redux/contactsSlice';

const Form = styled.form`
  margin-bottom: 20px;
  background: #fff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const FormGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  
  button {
    margin-left: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  background: #28a745;
  color: #fff;
`;

const CancelButton = styled.button`
  background: #6c757d;
  color: #fff;
`;

interface ContactFormProps {
  initialData: Contact | null;
  onSubmit: (contact: Contact) => void;
  onCancel: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telephone, setTelephone] = useState<string>('');

  useEffect(() => {
    if (initialData) {
      setFullName(initialData.fullName);
      setEmail(initialData.email);
      setTelephone(initialData.telephone);
    } else {
      setFullName('');
      setEmail('');
      setTelephone('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contact: Contact = {
      id: initialData ? initialData.id : 0,
      fullName,
      email,
      telephone,
    };
    onSubmit(contact);
    if (!initialData) {
      setFullName('');
      setEmail('');
      setTelephone('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Nome Completo:</Label>
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Email:</Label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Telefone:</Label>
        <Input
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          required
        />
      </FormGroup>
      <ButtonGroup>
        <CancelButton type="button" onClick={onCancel}>
          Cancelar
        </CancelButton>
        <SubmitButton type="submit">Salvar</SubmitButton>
      </ButtonGroup>
    </Form>
  );
};

export default ContactForm;
