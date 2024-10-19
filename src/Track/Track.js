import './Track.module.css';

const Track = ({trackUri, trackTitle, trackArtist, trackAlbum, buttonText, onSelectTrack}) => {

  const handleClick = (e) => {
    onSelectTrack(trackUri);
  }

  return (
    <div className="track">
      <div className="track-info">
        <h3>{trackTitle}</h3>
        <p>{trackArtist} | {trackAlbum}</p>
      </div>
        <button onClick={handleClick} trackUri={trackUri}>{buttonText}</button>
    </div>
  )
}




export default Track;