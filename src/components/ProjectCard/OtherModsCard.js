import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { IconBook, IconPuzzle } from '@tabler/icons-react';

export function OtherModsCard({ colSize = 4 }) {
  return (
    <div className={`col col--${colSize} margin-bottom--lg`} style={{ display: 'flex' }}>
      <div className={clsx('card', 'project-card')} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div className={clsx('card__image', 'text--center', 'padding--lg')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '280px' }}>
          <IconPuzzle
            size={120}
            stroke={1.5}
            style={{ opacity: 0.6 }}
          />
        </div>
        <div className="card__body" style={{ flex: '1' }}>
          <Heading as="h2" className="margin-bottom--sm">Other mods</Heading>
          <p>Various community projects and 3rd party products.</p>
        </div>
        <div className="card__footer">
          <Link className="button button--lg button--primary button--block button--icon" to="/gc/other-mods">
            <IconBook stroke={2} /> Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
