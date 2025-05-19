import React from 'react';
import DocSidebarItemLinkOriginal from '@theme-original/DocSidebarItem/Link';
import Badge from '@site/src/components/Badge';

export default function DocSidebarItemLink(props) {
  const { item, ...rest } = props;

  let newLabel = item.label;

  if (item.customProps?.badge) {
    newLabel = (
      <>
        {item.label}
        <span style={{ marginLeft: '8px', display: 'inline-block' }}>
          <Badge type={item.customProps.badge.style} uppercase={item.customProps.badge.uppercase}>
            {item.customProps.badge.text}
          </Badge>
        </span>
      </>
    );
  }

  const newItem = { ...item, label: newLabel };

  return <DocSidebarItemLinkOriginal {...rest} item={newItem} />;
}
