import { useState } from "react";
import Album from "./Component/album/Album";
import NavBar from "./Component/NavBar/Nav";
import UserAlbum from "./Component/userAlbum/UserAlbum";
import CreateAlbums from "./Component/album/CreateAlbums";

function App() {
  const[albumName, setAlbumName] = useState({title:"", content:""});
  const [albums, setAlbums] = useState(["Anju"]);
  const [selectedAlbum, setSelectedAlbum] = useState(null); 
  const [showCreateAlbums, setShowCreateAlbums] = useState(false);

  function handleSelectAlbum(album) {
    setShowCreateAlbums(false)
    setSelectedAlbum(album); 
  }

  function handleBack() {
    setSelectedAlbum(null);
  }

  return (
    <div className="App">
      <NavBar />
      {showCreateAlbums && 
      <CreateAlbums 
      albums={albums} 
      setAlbums={setAlbums} 
      albumName={albumName} 
      setAlbumName={setAlbumName} 
      />}

      {selectedAlbum ? (
        <UserAlbum 
        selectedAlbum={selectedAlbum} 
        albums ={albums}
        setAlbums={setAlbums} 
        handleBack={handleBack}  />
      ) : (
        <Album 
        albums={albums} 
        setAlbums={setAlbums} 
        handleSelectAlbum={handleSelectAlbum} 
        showCreateAlbums={showCreateAlbums} 
        setShowCreateAlbums={setShowCreateAlbums} />
      )}
    </div>
  );
}

export default App;
