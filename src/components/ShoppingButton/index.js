import React from 'react';
import { IconShoppingBag } from '@tabler/icons-react';
import styles from './styles.module.css';

const STORE_LABELS = {
  'aliexpress.': 'AliExpress',
  'amazon.': 'Amazon'
};

function getDefaultLabel(url) {
  if (!url) return 'Buy here';
  
  const matchedStore = Object.entries(STORE_LABELS)
    .find(([domain]) => url.includes(domain));
    
  return matchedStore ? matchedStore[1] : 'Buy here';
}

export default function ShoppingButton({ url, label }) {
  const displayLabel = label || getDefaultLabel(url);
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.shoppingButton}
    >
      <IconShoppingBag stroke={2} />
      <span className={styles.shoppingButtonText}>{displayLabel}</span>
    </a>
  );
} 