import { useState, useEffect, useCallback } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Tracklist from './Tracklist/Tracklist';
import Playlist from './Playlist/Playlist';
import Spotify from './Spotify/Spotify';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tracklist, setTracklist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
    
  useEffect(() => doSearch(''),[]);

  const doSearch = useCallback((term) => {
    setSearchTerm(term);
    Spotify.search(term).then(setTracklist);
  },[]);


  const onAddTrackHandler = (trackUri) => {
    const newTrack = tracklist.find(obj => obj.uri === trackUri);
    if (playlist.find(obj => obj.uri === trackUri) === undefined) {
      setPlaylist(tracks => [...tracks, newTrack]);
    };
  };

  const onRemoveTrackHandler = (trackUri) => {
    setPlaylist(tracks => tracks.filter(track => !(track.uri === trackUri)));
  };

  const onSavePlaylistHandler = (playlistName) => {
    const playlistUris = playlist.map(track => track.uri);
    Spotify.savePlaylist(playlistName, playlistUris);
    //clear playlist
    setPlaylist([]);
    return true;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jim's Giant Jammming</h1>
        <SearchBar onSubmitForm={doSearch} />
      </header>
      <main>
        <Tracklist searchTerm={searchTerm} tracklist={tracklist} onAddTrack={onAddTrackHandler}/>
        <Playlist playlist={playlist} onRemoveTrack={onRemoveTrackHandler} onSavePlaylist={onSavePlaylistHandler}/>
      </main>
    </div>
  );
}

export default App;
