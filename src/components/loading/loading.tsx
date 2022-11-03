import styled from 'styled-components';
import './loading.css';

const LoadingWrapper = styled.div`
  display: flex;
  width: 9rem;
  height: 9rem;
  top: 50%;
  left: 50%;
  margin-top: -5rem;
  margin-left: -4rem;
  position: absolute;
  background-color: #fff;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const SmallCircle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #7fb900;
  z-index: 5;
`;

export const LoadingComponent: React.FC = () => {
  return (
    <LoadingWrapper>
      <SmallCircle />
      <div className="circle circle1" />
      <div className="circle circle2" />
    </LoadingWrapper>
  );
};
