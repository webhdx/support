/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';
import { IconShoppingCart, IconHammer } from '@tabler/icons-react';

function ETH2GCCard({name, image, purchase_url, diy_url, nic, description}) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={purchase_url}>
            <Image img={image} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__body">
          <Heading as="h2" className="margin-bottom--none">{name}</Heading>
          <div className="margin-bottom--md margin-top--sm">
            <span class="badge badge--secondary">{nic}</span>
          </div>
          {description}
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {purchase_url != null && 
              <Link className="button button--lg button--primary button--icon" to={purchase_url}>
                <IconShoppingCart stroke={2} /> Buy
              </Link>}
            {diy_url != null && 
              <Link className="button button--lg button--secondary button--icon" to={diy_url}>
                <IconHammer stroke={2} /> Build
              </Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ETH2GCModels({models}) {
  return (
    <div className="row">
      {
        models.map((model) => (
          <ETH2GCCard key={model.name} {...model} />
        ))
      }
    </div>
  );
}