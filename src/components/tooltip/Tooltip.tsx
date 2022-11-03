import React from 'react';

import { StyledTooltip, TooltipBody } from './Tooltip.styles';
import { TooltipProps } from './Tooltip.types';

export const Tooltip: React.FC<TooltipProps> = ({ children, visible }) => {
  return (
    <StyledTooltip visible={visible}>
      <TooltipBody>{children}</TooltipBody>
    </StyledTooltip>
  );
};
