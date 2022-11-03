import { Header } from './components/header/header';
import { UserList } from './components/userList/userList';
import Switch from 'react-switch';
import './App.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LoadingComponent } from './components/loading/loading';
import { useWindowSize } from './hooks/useWindowSize';

const OptionsContainer = styled.div`
  position: absolute;
  top: 1rem;
  padding: 10px 15px;
  right: 2rem;
`;
const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 2rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
`;

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [makeMoreData, setMakeMoreData] = useState<boolean>(false);
  const [withPageFetch, setWithPageFetch] = useState<boolean>(false);

  const { isResponsiveDesign } = useWindowSize();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div className="App">
      {isLoading && <LoadingComponent />}
      {!isLoading && (
        <>
          <Header />
          <UserList makeMoreData={makeMoreData} withPageFetch={withPageFetch} />
          {!isResponsiveDesign && (
            <OptionsContainer>
              <span>Options:</span>
              <br />
              <OptionWrapper>
                <span>enable more data</span>
                <Switch
                  disabled
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
          )}
        </>
      )}
    </div>
  );
}

export default App;
