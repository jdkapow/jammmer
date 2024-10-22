import styles from './Track.module.css';

const Track = ({trackUri, trackTitle, trackArtist, trackAlbum, trackInPlaylist, buttonText, onSelectTrack}) => {

  const handleClick = (e) => {
    onSelectTrack(trackUri);
  }

  const containerClassName1 = styles.trackContainer
  const containerClassName2 = (buttonText === "+" ? (trackInPlaylist === "true" ? styles.trackContainerSelected : styles.trackContainerAdd) : styles.trackContainerRemove)
  const containerClassNameText = [containerClassName1, containerClassName2].join(" ");

  return (
    <div className={containerClassNameText}>
      <div className={styles.trackInfo}>
        <h3>{trackTitle}</h3>
        <p>{trackArtist} | {trackAlbum} | {trackInPlaylist}</p>
      </div>
      <div className={styles.trackButton}>
        <button onClick={handleClick} trackUri={trackUri} className={styles.button}
        style={(trackInPlaylist === "true" && buttonText === "+") ? {display:"none"} : {}}>{buttonText} </button>
      </div>
    </div>
  )
}

export default Track;