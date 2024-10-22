import { useState } from 'react'
import styles from './Tracklist.module.css';
import SearchBar from '../SearchBar/SearchBar';
import Track from '../Track/Track'

const Tracklist = ( {tracklist, onSubmitForm, onAddTrack}) => {

  return (
    <div id="search-section">
      <div className="bar">
        <SearchBar onSubmitForm={onSubmitForm} />
      </div>
      <div className="list-tracks">
        {tracklist.map((track) => (
            <Track 
              trackUri={track.uri} 
              trackTitle={track.title} 
              trackArtist={track.artist} 
              trackAlbum={track.album} 
              trackInPlaylist={track.inPlaylist}
              buttonText='+' 
              onSelectTrack={onAddTrack} 
            />
        ))}
      </div>
    </div>
  );
}




export default Tracklist;