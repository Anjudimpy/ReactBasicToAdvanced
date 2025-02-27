import { useState } from "react"
import styles from "./Album.module.css"
export  default function CreateAlbums(props){
    const[albumName, setAlbumName] = useState("");
    const{albums, setAlbums} = props;

    function handleAlbumCreate(){
        if(albumName.trim()){
          setAlbums([albumName,...albums]);
          setAlbumName("");
          console.log(albums)
        }
    }

    function handleAlbumClear(){
       setAlbumName("");
    }

    return(
      <>
      <div className={styles.createAlbumsContainer}>
        <h2>Create an album</h2>
        <div className={styles.createAlbums}>
            <input placeholder="Album Name"  value={albumName} onChange={(e)=>setAlbumName(e.target.value)}/>
              <button className={styles.clearBtn} onClick={handleAlbumClear}>Clear</button>
           <button className={styles.createBtn} onClick={handleAlbumCreate}>Create</button>
           </div>
        </div>
          </>
    )
}