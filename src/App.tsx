import styled from 'styled-components';
import { Card } from './Card';

const AppWrapper = styled.div`

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`

export const App = () => {
  return (
    <AppWrapper>
      <Card />
    </AppWrapper>
  );
}

export default App;
