import styles from './styles.module.css';

type FlexImageProps = {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
};

const FlexImage: React.FC<FlexImageProps> = ({ src, alt, style, className }) => {
  return (
    <div className={`${styles.container} ${className || ''}`} style={style}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default FlexImage;
