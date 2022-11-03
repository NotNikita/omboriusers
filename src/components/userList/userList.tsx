import React, { useState, useEffect, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { StyledList, endMessage } from './userList.styles';
import { bigDataObject } from '../../constants/bigUserList';
import { UserNode } from '../userNode/userNode';

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
  // TODO: How to make only one array
  const [dbUsers, setDbUsers] = useState<User[] | undefined>([]);
  const [isMaxPagesReached, setIsMaxPagesReached] = useState<boolean>(false);

  const getUrl = (): string => {
    return `https://reqres.in/api/users?page=${pages}`;
  };

  useEffect(() => {
    setPages(1);
    setUsers([]);
    setDbUsers([]);
    setIsMaxPagesReached(false);
    loadData();
  }, [makeMoreData]);

  const fetchData = async (): Promise<void> => {
    const response = await fetch(getUrl());
    const json = await response.json();
    setIsMaxPagesReached(json.total_pages == pages);
    setUsers(users?.length ? [...users, ...json.data] : json.data);
  };

  const getBigData = useCallback((): void => {
    const json = bigDataObject.bigData[pages - 1];
    setIsMaxPagesReached(json.total_pages === pages);
    setDbUsers(dbUsers?.length ? [...dbUsers, ...json.data] : json.data);
  }, [bigDataObject, dbUsers, pages]);

  const loadData = useCallback(async () => {
    try {
      if (isMaxPagesReached) return;
      setTimeout(
        async () => {
          if (makeMoreData) {
            getBigData();
          } else {
            fetchData();
          }
        },
        withPageFetch ? 2000 : 0,
      );
    } catch (error) {
      console.log('error', error);
    }
  }, [withPageFetch, makeMoreData, pages]);

  useEffect(() => {
    loadData();
  }, [pages]);

  const showNextPage = (): void => {
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
        {(makeMoreData ? dbUsers : users)?.map((user, index) => (
          <UserNode key={index} user={user} />
        ))}
      </InfiniteScroll>
    </StyledList>
  );
};
