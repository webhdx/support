/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';

const Models = [
  {
    name: 'ETH2GC Sidecar',
    image: require('@site/static/img/eth2gc/ETH2GC_Sidecar.jpg'),
    purchase_url: 'https://store.webhdx.dev/products/eth2gc-sidecar-broadband-adapter-emulator',
    diy_url: null,
    description: (
      <div>
        Ethernet module: <b>ENC28J60</b>
        <br /><br />
        <div>✅ Uses off the shelf ENC28J60 "Mini" module</div>
        <div>✅ Compatible with GameBoy Player</div>
        <div>✅ Cable comes towards the rear</div>
      </div>
    )
  },
  {
    name: 'ETH2GC Lite',
    image: require('@site/static/img/eth2gc/ETH2GC_Lite.jpg'),
    purchase_url: 'https://store.webhdx.dev/products/eth2gc-lite-broadband-adapter-emulator',
    diy_url: '#',
    description: (
      <div>
        Ethernet module: <b>ENC28J60</b>
        <br /><br />
        <div>✅ Uses off the shelf ENC28J60 "Mini" module</div>
        <div>❌ Inompatible with GameBoy Player*</div>
        <div>❌ Cable sticks out to the side</div>
      </div>
    )
  },
];

function ETH2GCCard({name, image, purchase_url, diy_url, description}) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
          <Link to={purchase_url}>
            <Image img={image} alt={`${name}'s image`} />
          </Link>
        </div>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          {description}
        </div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {purchase_url != null && 
              <Link className="button button--primary" to={purchase_url}>
                🛍️ Purchase
              </Link>}
            {diy_url != null && 
              <Link className="button button--secondary" to={diy_url}>
                🛠️ Build
              </Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ETH2GCModels() {
  return (
    <div className="row">
      {Models.map((model) => (
        <ETH2GCCard key={model.name} {...model} />
      ))}
    </div>
  );
}