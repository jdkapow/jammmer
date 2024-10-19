import './Playlist.module.css';
import Track from '../Track/Track.js';

const Playlist = ( {onChangeTitle, playList, onRemoveTrack} ) => {

  const handleChange = (e) => {
    onChangeTitle(e.target.value);
  }

  const handleClick =(e) => {

  }

  return (
    <div className="list">
      <h2>Playlist Name:</h2>
      <input type="text" onChange={handleChange}></input>
      <br />
      <button onClick={handleClick}>Save Playlist to Spotify</button>
      <div classNme="list-tracks">
        {playList.map((track) => (
            <Track 
              trackUri={track.uri} 
              trackTitle={track.title} 
              trackArtist={track.artist} 
              trackAlbum={track.album} 
              buttonText='-' 
              onSelectTrack={onRemoveTrack}
           />
        ))}
      </div>
    </div>
  )
}




export default Playlist;