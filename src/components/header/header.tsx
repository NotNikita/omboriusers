import React from 'react';
import { HeaderContainer } from './header.styles';

export interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title = 'Users' }) => {
  return <HeaderContainer>{title}</HeaderContainer>;
};
