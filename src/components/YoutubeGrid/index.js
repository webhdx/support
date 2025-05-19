import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export function YoutubeCard({videoId, title}) {
  return (
    <a 
      href={`https://www.youtube.com/watch?v=${videoId}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.cardLink}
    >
      <div className={clsx('card', styles.videoCard)}>
        <div className="card__image">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="card__body">
          <h4 className={styles.cardTitle} title={title}>{title}</h4>
        </div>
      </div>
    </a>
  );
}

export default function YoutubeGrid({videos}) {
  return (
    <div className={styles.videoGrid}>
      {videos.map((video, index) => (
        <div key={index} className={styles.videoItem}>
          <YoutubeCard
            videoId={video.id}
            title={video.title}
          />
        </div>
      ))}
    </div>
  );
} 