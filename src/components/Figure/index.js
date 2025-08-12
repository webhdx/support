import React from 'react';
import Image from '@theme/IdealImage';
import styles from './styles.module.css';

const Figure = ({ img, alt, caption, zoom }) => {
  return (
    <div className={`${styles.figureContainer} margin--lg`}>
      <Image img={img} alt={alt} className={styles.image} />
      {caption && <div className={`${styles.caption} padding-top--sm padding-bottom--sm {!zoom ?? 'image-zoom'}`}>{caption}</div>}
    </div>
  );
};

export default Figure;
