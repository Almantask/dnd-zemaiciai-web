import ReactPlayer from 'react-player';
import styles from './styles.module.css';

export default function VideoPlayer({ url }) {
  return (
    <div className={styles.videoContainer}>
      <div style={{ position: 'relative', paddingTop: '56.25%' }}>
        <ReactPlayer
          url={url}
          playing
          controls
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    </div>
  );
}
