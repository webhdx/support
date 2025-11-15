import React from 'react';
import { IconShoppingCart, IconExternalLink } from '@tabler/icons-react';
import Image from '@theme/IdealImage';
import styles from './styles.module.css';

export function ProductCard({
  name,
  description,
  url,
  image,
  price,
  badge,
  storeName
}) {
  return (
    <div className={styles.productCard}>
      {badge && (
        <div className={styles.badge}>{badge}</div>
      )}
      <div className={styles.imageContainer}>
        <Image img={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{name}</h4>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
        {price && (
          <div className={styles.price}>{price}</div>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.buyButton}
        >
          <IconShoppingCart stroke={2} />
          <span>Buy {storeName && `on ${storeName}`}</span>
          <IconExternalLink stroke={2} size={18} />
        </a>
      </div>
    </div>
  );
}

export function ProductGrid({ children }) {
  return (
    <div className={styles.productGrid}>
      {children}
    </div>
  );
}
