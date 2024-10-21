import { useState } from 'react';
import './Playlist.module.css';
import Track from '../Track/Track.js';

const Playlist = ( {playlist, onRemoveTrack, onSavePlaylist} ) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleClick =(e) => {
    if (!(playlistName === '')) {
      const success = onSavePlaylist(playlistName);
      if (success) {setPlaylistName('')};
    };
  };

  return (
    <div className="list">
      <h2>Playlist Name:</h2>
      <input type="text" value={playlistName} onChange={handleChange}></input>
      <br />
      <button onClick={handleClick}>Save Playlist to Spotify</button>
      <div classNme="list-tracks">
        {playlist.map((track) => (
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
};

export default Playlist;