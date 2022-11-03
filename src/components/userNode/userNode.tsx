import React, { useRef, useState } from 'react';
import { Tooltip } from '../tooltip/Tooltip';
import { User } from '../userList/userList';
import {
  AvatarContainer,
  UserAvatar,
  UserInfoContainer,
  UserContainer,
} from './userNode.styles';

export interface UserNodeProps {
  user: User;
}

export const UserNode: React.FC<UserNodeProps> = ({ user }) => {
  const [visible, setVisible] = useState(false);
  const { id, avatar, first_name, last_name, email } = user;

  const changeVisibility = (): void => setVisible(!visible);

  return (
    <UserContainer
      key={id}
      onMouseEnter={changeVisibility}
      onMouseLeave={changeVisibility}
    >
      <Tooltip visible={visible}>{email}</Tooltip>
      <AvatarContainer>
        <UserAvatar src={avatar} />
      </AvatarContainer>
      <UserInfoContainer>
        <div>{first_name}</div>
        <div>{last_name}</div>
      </UserInfoContainer>
    </UserContainer>
  );
};
