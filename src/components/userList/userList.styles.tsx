import styled from 'styled-components';

export const StyledList = styled.ol({
  width: '100%',
  backgroundColor: '#fff',
  listStyleType: 'none',
  margin: 0,
  marginBlockStart: 0,
  marginBlockEnd: 0,
  marginInlineStart: 0,
  marginInlineEnd: 0,
  paddingInlineStart: 0,
  gap: '10px',
});

export const endMessage: JSX.Element = (
  <p style={{ textAlign: 'center' }}>
    <b>Yay! You have seen it all</b>
  </p>
);
