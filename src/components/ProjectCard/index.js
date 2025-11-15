import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import { IconBook } from '@tabler/icons-react';

function ProjectCard({ name, description, docsUrl, logoSrc, className }) {
  return (
    <div className="col col--6 margin-bottom--lg" style={{ display: 'flex' }}>
      <div className={clsx('card', 'project-card', className)} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div className={clsx('card__image', 'text--center', 'padding--lg')}>
          <ThemedImage
            alt={`${name} Logo`}
            sources={{
              light: useBaseUrl(logoSrc.light),
              dark: useBaseUrl(logoSrc.dark),
            }}
            style={{ maxHeight: '200px', width: 'auto' }}
          />
        </div>
        <div className="card__body" style={{ flex: '1' }}>
          <Heading as="h2" className="margin-bottom--sm">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--lg button--primary button--block button--icon" to={docsUrl}>
            <IconBook stroke={2} /> Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ProjectCardList({ projects }) {
  return (
    <div className="row">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}
