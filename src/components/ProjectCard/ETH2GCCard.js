import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import { IconBook } from '@tabler/icons-react';

export function ETH2GCCard({ colSize = 4 }) {
  const project = {
    name: 'ETH2GC',
    description: 'A series of hardware adapters utilizing Broadband Adapter emulation in Swiss.',
    docsUrl: '/gc/eth2gc',
    logoSrc: {
      light: '/img/eth2gc/ETH2GC_Logo_Dark.png',
      dark: '/img/eth2gc/ETH2GC_Logo_Light.png',
    },
    className: 'eth2gc',
  };

  return (
    <div className={`col col--${colSize} margin-bottom--lg`} style={{ display: 'flex' }}>
      <div className={clsx('card', 'project-card', project.className)} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div className={clsx('card__image', 'text--center', 'padding--lg')}>
          <ThemedImage
            alt={`${project.name} Logo`}
            sources={{
              light: useBaseUrl(project.logoSrc.light),
              dark: useBaseUrl(project.logoSrc.dark),
            }}
            style={{ maxHeight: '200px', width: 'auto' }}
          />
        </div>
        <div className="card__body" style={{ flex: '1' }}>
          <Heading as="h2" className="margin-bottom--sm">{project.name}</Heading>
          <p>{project.description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--lg button--primary button--block button--icon" to={project.docsUrl}>
            <IconBook stroke={2} /> Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
