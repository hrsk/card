import styled from 'styled-components';
import { Card } from './Card';

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const App = () => {
  return (
    <AppWrapper>
      <Card />
    </AppWrapper>
  );
}

export default App;
