import styled from 'styled-components';
import ContactList from './components/ContactList';

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

function App() {
  return (
    <Container>
      <h2>Lista de Contatos</h2>
      <ContactList />
    </Container>
  );
}

export default App;
