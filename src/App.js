import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Tracklist from './Tracklist/Tracklist';
import Playlist from './Playlist/Playlist';

// Dummy songs
const sampleTracks = [
  {
    title: "Cortez the Killer", artist: "Neil Young", album: "Zuma", uri: 1
  },
  {
    title: "Hey Hey, My My", artist: "Neil Young", album: "Rust Never Sleeps", uri: 2
  },
  {
    title: "Hey", artist: "Low", album: "Hey What", uri: 3
  },
  {
    title: "Hey Jude", artist: "The Beatles", album: "Hey Jude", uri: 4
  },
  { 
    title: "After the Gold Rush", artist: "Neil Young", album: "After the Gold Rush", uri: 5
  }
];

function App() {
  const [searchBarText, setSearchBarText] = useState('Neil');
  const [searchTerm, setSearchTerm] = useState('');
  const [trackList, setTrackList] = useState(sampleTracks);
  const [playList, setPlayList] = useState([]);
  const [playListTitle, setPlayListTitle] = useState('');

  const onChangeTextHandler = (newText) => {
    setSearchBarText(newText);
  }

  const onChangeTitleHandler = (newTitle) => {
    setPlayListTitle(newTitle);
  }

  const onAddTrackHandler = (trackUri) => {
    const newTrack = trackList.find(obj => obj.uri === trackUri);
    if (playList.find(obj => obj.uri === trackUri) === undefined) {
      setPlayList(tracks => [...tracks, newTrack]);
    };
  };

  const onRemoveTrackHandler = (trackUri) => {
    setPlayList(tracks => tracks.filter(track => !(track.uri === trackUri)));
  };

  const doSearch = () => {
    setSearchTerm(searchBarText);
    const ucaseSearchTerm = searchBarText.toUpperCase();
    const filteredTracks = sampleTracks.filter(track =>
        (track.title.toUpperCase().includes(ucaseSearchTerm) || 
          track.artist.toUpperCase().includes(ucaseSearchTerm) || 
          track.album.toUpperCase().includes(ucaseSearchTerm)));
    setTrackList(filteredTracks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jim's Giant Jammmer</h1>
        <SearchBar onSubmitForm={doSearch} onChangeText={onChangeTextHandler} searchBarText={searchBarText}/>
      </header>
      <main>
        <Tracklist searchTerm={searchTerm} trackList={trackList} onAddTrack={onAddTrackHandler}/>
        <Playlist onChangeTitle={onChangeTitleHandler} playList={playList} onRemoveTrack={onRemoveTrackHandler}/>
      </main>
    </div>
  );
}

export default App;
