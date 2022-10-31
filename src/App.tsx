import { Header } from './components/header/header';
import { UserList } from './components/userList/userList';
import Switch from 'react-switch';
import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const OptionsContainer = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
`;
const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100;
  line-height: 2rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
`;

function App() {
  const [makeMoreData, setMakeMoreData] = useState<boolean>(false);
  const [withPageFetch, setWithPageFetch] = useState<boolean>(false);

  return (
    <div className="App">
      <Header />
      <UserList makeMoreData={makeMoreData} withPageFetch={withPageFetch} />

      <OptionsContainer>
        <span>Options:</span>
        <br />
        <OptionWrapper>
          <span>enable more data</span>
          <Switch
            onChange={() => setMakeMoreData(!makeMoreData)}
            checked={makeMoreData}
          />
        </OptionWrapper>
        <OptionWrapper>
          <span>page fetch timeout</span>
          <Switch
            onChange={() => setWithPageFetch(!withPageFetch)}
            checked={withPageFetch}
          />
        </OptionWrapper>
      </OptionsContainer>
    </div>
  );
}

export default App;
