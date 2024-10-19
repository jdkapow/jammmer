import './Tracklist.module.css';
import Track from '../Track/Track'

const Tracklist = ( {searchTerm, trackList, onAddTrack}) => {

  if (searchTerm === '') {
    return (
      <div></div>
    )
  } else {
    return (
      <div className="list">
        <h2>Search Term: {searchTerm}</h2>
        <div classNme="list-tracks">
          {trackList.map((track) => (
              <Track 
                trackUri={track.uri} 
                trackTitle={track.title} 
                trackArtist={track.artist} 
                trackAlbum={track.album} 
                buttonText='+' 
                onSelectTrack={onAddTrack} 
              />
          ))}
        </div>
      </div>
    );
  }
}




export default Tracklist;