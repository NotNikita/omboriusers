import styled from 'styled-components';

export const UserContainer = styled.li({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  height: '16.6%',
  padding: '15px',
  borderBottom: '2px solid #f1f1f1',

  '&:hover': {
    backgroundColor: '#e9e9e9',
  },
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
