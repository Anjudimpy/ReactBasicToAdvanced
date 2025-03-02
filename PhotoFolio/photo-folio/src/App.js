import { useState, useEffect } from "react";
import Album from "./Component/album/Album";
import NavBar from "./Component/NavBar/Nav";
import UserAlbum from "./Component/userAlbum/UserAlbum";
import CreateAlbums from "./Component/album/CreateAlbums";
import { db } from "./firebase"; 
import { doc, collection, addDoc, setDoc, getDocs } from "firebase/firestore";


function App() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showCreateAlbums, setShowCreateAlbums] = useState(false);
  const[albumName, setAlbumName] = useState("");
  // ✅ Fetch albums **once** when the app loads
  useEffect(() => {
    async function fetchAlbums() {
      try {
        const snapShot = await getDocs(collection(db, "albums"));
        const albumList = snapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched Albums:", albumList);
        setAlbums(albumList);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    }
    fetchAlbums();
  }, []);

  async function handleSbumit(e) {
    e.preventDefault();
    if (albumName.trim()) {
      const newAlbum = {
        albumName: albumName,
        createOn: new Date(),
      };
  
      // Add to Firestore
      const docRef = await addDoc(collection(db, "albums"), newAlbum);
  
      // Update local state with full album object (including ID)
      setAlbums([{ id: docRef.id, ...newAlbum }, ...albums]);
  
      // Reset album name
      setAlbumName("");
    }
  }
  

  function handleSelectAlbum(album) {
    setShowCreateAlbums(false);
    setSelectedAlbum(album);
  }

  function handleBack() {
    setSelectedAlbum(null);
  }

  return (
    <div className="App">
      <NavBar />
      {showCreateAlbums && (
        <CreateAlbums albums={albums} setAlbums={setAlbums} albumName={albumName} setAlbumName={setAlbumName} handleSbumit={handleSbumit} />
      )}

      {selectedAlbum ? (
        <UserAlbum selectedAlbum={selectedAlbum} handleBack={handleBack} />
      ) : (
        <Album
          albums={albums}
          handleSelectAlbum={handleSelectAlbum}
          showCreateAlbums={showCreateAlbums}
          setShowCreateAlbums={setShowCreateAlbums}
        />
      )}
    </div>
  );
}

export default App;
