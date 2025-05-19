import React from 'react';
import { IconBrandGithub } from '@tabler/icons-react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

const HeroSection = ({ title, description, features, githubUrl, logoSrc, className }) => {
  const backgroundImage = className === 'picoboot' ? useBaseUrl('/img/picoboot/logo.svg') : useBaseUrl('/img/eth2gc/ETH2GC_Logo_Light.png');

  return (
    <div className={`hero project ${className}`} style={{ backgroundImage: `url(${backgroundImage}) !important` }}>
      <div className="container">
        <div className="row hero__row">
          <div className="col col--8 hero__content">
            <h1 className="hero__title">{title}</h1>
            <div className="hero__features">
              {features ? (
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p>{description}</p>
              )}
            </div>
            <a href={githubUrl} target="_blank" className="button button--lg button--primary button--icon">
              <IconBrandGithub stroke={2} /> View on GitHub
            </a>
          </div>
          <div className="col col--4 hero__logo">
            <ThemedImage
              alt={`${title} Logo`}
              width="70%"
              sources={{
                light: useBaseUrl(logoSrc.light),
                dark: useBaseUrl(logoSrc.dark),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 