import React from 'react';
import { luiClassName } from '../util';

const ListItem = ({
  className = '',
  children,
  active,
  disabled,
  ...extraProps
}) => {
  const finalClassName = luiClassName('list__item', {
    className,
    states: { active, disabled },
  });
  return (
    <li className={finalClassName} disabled={disabled} {...extraProps}>
      {children}
    </li>
  );
};

export default ListItem;
