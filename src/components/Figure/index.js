import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const Figure = ({ img, alt, caption, zoom }) => {
  console.log(img.src.images[img.src.images.length -1].path);
  return (
    <div className={`${styles.figureContainer} margin--lg ${zoom ? 'zoom' : ''}`}>
      {zoom ? (
        <Link href={img.src.images[img.src.images.length -1].path} target="_blank"><Image img={img} alt={alt} /></Link>
      ) : (
        <Image img={img} alt={alt} />
      )}
      {caption && (
        <div
          className={`padding-top--sm padding-bottom--sm`}
        >
          {caption}
        </div>
      )}
    </div>
  );
};

export default Figure;
