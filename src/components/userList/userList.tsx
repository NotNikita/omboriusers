import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  AvatarContainer,
  StyledList,
  UserAvatar,
  UserInfoContainer,
  UserNode,
  endMessage,
} from './userList.styles';

export interface User {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}

// export interface UserListProps {}

export const UserList: React.FC = () => {
  const [pages, setPages] = useState<number>(1);
  const [users, setUsers] = useState<User[] | undefined>([]);
  const [isMaxPagesReached, setIsMaxPagesReached] = useState<boolean>(false);

  const url = `https://reqres.in/api/users?page=${pages}`;

  const fetchData = useCallback(async () => {
    try {
      if (isMaxPagesReached) return;
      const response = await fetch(url);
      const json = await response.json();
      setIsMaxPagesReached(json.total_pages == pages);
      setUsers(users?.length ? [...users, ...json.data] : json.data);
    } catch (error) {
      console.log('error', error);
    }
  }, [url, users]);

  useEffect(() => {
    fetchData();
  }, [url, pages]);

  const showNextPage = (): void => {
    setPages(pages + 1);
  };

  return (
    <StyledList>
      <InfiniteScroll
        dataLength={6}
        next={showNextPage}
        hasMore={pages < 3 && !isMaxPagesReached}
        loader={<h4>Loading...</h4>}
        endMessage={endMessage}
      >
        {users?.map(({ id, avatar, first_name, last_name }) => (
          <UserNode key={id}>
            <AvatarContainer>
              <UserAvatar src={avatar} />
            </AvatarContainer>
            <UserInfoContainer>
              <div>{first_name}</div>
              <div>{last_name}</div>
            </UserInfoContainer>
          </UserNode>
        ))}
      </InfiniteScroll>
    </StyledList>
  );
};
