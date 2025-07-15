import React from 'react';

import { useIcons } from 'src/hooks';
import { Icon } from '../icon';

import './loading-overlay.scss';

interface LoadingOverlayProps {
  iconSize?: number
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  iconSize = 100,
}) => {
  const icons = useIcons();

  return (
    <div className="loading-overlay">
      <Icon name={icons.cibCoffeescript} className="loading-icon loading-animation" size={iconSize} />
    </div>
  );
};
