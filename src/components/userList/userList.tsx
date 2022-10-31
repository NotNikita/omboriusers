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
import { bigDataObject } from '../../constants/bigUserList';

export interface User {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface UserListProps {
  makeMoreData: boolean;
  withPageFetch: boolean;
}

export const UserList: React.FC<UserListProps> = ({
  makeMoreData,
  withPageFetch,
}) => {
  const [pages, setPages] = useState<number>(1);
  const [users, setUsers] = useState<User[] | undefined>([]);
  const [isMaxPagesReached, setIsMaxPagesReached] = useState<boolean>(false);

  const url = `https://reqres.in/api/users?page=${pages}`;

  useEffect(() => {
    setPages(1);
    setUsers([]);
  }, [makeMoreData]);

  const fetchData = async (): Promise<void> => {
    const response = await fetch(url);
    const json = await response.json();
    setIsMaxPagesReached(json.total_pages == pages);
    setUsers(users?.length ? [...users, ...json.data] : json.data);
  };

  const getBigData = useCallback((): void => {
    const json = bigDataObject.bigData[pages - 1];
    setIsMaxPagesReached(json.total_pages == pages);
    setUsers(users?.length ? [...users, ...json.data] : json.data);
  }, [bigDataObject, users]);

  const loadData = useCallback(async () => {
    try {
      if (isMaxPagesReached) return;
      setTimeout(
        async () => {
          if (makeMoreData) {
            console.log('1');
            getBigData();
          } else {
            console.log('2');
            fetchData();
          }
        },
        withPageFetch ? 2000 : 0,
      );
    } catch (error) {
      console.log('error', error);
    }
  }, [url, users, withPageFetch]);

  useEffect(() => {
    console.log('loadData call');
    loadData();
  }, [url, pages, makeMoreData]);

  const showNextPage = (): void => {
    console.log('showNextPage call');
    setPages(pages + 1);
  };

  return (
    <StyledList>
      <InfiniteScroll
        dataLength={6}
        next={showNextPage}
        hasMore={!isMaxPagesReached}
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
