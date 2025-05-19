import React from 'react';
import clsx from 'clsx';

export default function Badge({type = 'info', uppercase = false, children}) {
  return (
    <span className={clsx('badge', `badge--${type}`, { 'text--uppercase': uppercase })}>
      {children}
    </span>
  );
} 