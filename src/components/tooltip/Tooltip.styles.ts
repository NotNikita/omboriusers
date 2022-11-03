import styled from 'styled-components';

import { TooltipProps } from './Tooltip.types';

export const StyledTooltip = styled.div<TooltipProps>`
  opacity: ${props => (props.visible ? 1 : 0)};
  position: absolute;
  background: pink;
  color: black;
  z-index: ${props => (props.visible ? 2 : -1)};
  right: 10%;
  line-height: 2rem;
  border-radius: 15px;
  padding: 5px 10px;
  max-width: 165px;
  margin-left: 10%;
  box-shadow: 4px 2px 10px 0 rgba(0, 0, 0, 0.2);
  transition: opacity 1.3s;
  &:hover {
    opacity: 1;
  }
`;

export const TooltipBody = styled.div``;
