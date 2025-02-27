import { useState } from "react";
import styles from "../album/Album.module.css";

export default function UserAlbum({ selectedAlbum, handleBack, albums, setAlbums }) {
  const [imageName, setImageName] = useState("");
  const [images, setImages] = useState([]);

  function addImages() {
    if(imageName.trim()){
        setAlbums([imageName,...albums]);
        setImageName("");

      }
  }

  return (
    <div className={styles.albumDetails}>
      <h2>Album: {selectedAlbum}</h2>

      <div>
        <input
          placeholder="Image name"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
        />
        <button onClick={addImages}>Add</button>
      </div>

      <button className={styles.backBtn} onClick={handleBack}>
        Back to Albums
      </button>

      <div>
        {
          albums.map((img, i) => <div key={i}>{img}</div>)
       }
      </div>
    </div>
  );
}
