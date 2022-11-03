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

  '& li:not(:last-child)': {
    marginBottom: '10px',
  },
});

export const UserNode = styled.li({
  display: 'flex',
  flexDirection: 'row',
  height: '16.6%',
  padding: '15px',
  borderBottom: '2px solid #f1f1f1',
});
export const AvatarContainer = styled.div({});
export const UserAvatar = styled.img({
  borderRadius: '50%',
  width: '4.5rem',
});
export const UserInfoContainer = styled.div({
  width: '80%',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  paddingLeft: '30px',
  fontSize: '1.2rem',
  fontWeight: '600',
});

export const endMessage: JSX.Element = (
  <p style={{ textAlign: 'center' }}>
    <b>Yay! You have seen it all</b>
  </p>
);
