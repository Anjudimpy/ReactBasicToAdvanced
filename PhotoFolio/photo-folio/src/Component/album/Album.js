import { useState } from "react"
import styles from "./Album.module.css"
import CreateAlbums from "./CreateAlbums";

export  default function  Album(){
    const[showCreateAlbums, setshowCreateAlbums] = useState(true);
    const[albums, setAlbums] = useState(["anju"]);

    function handleAlbums(){
        setshowCreateAlbums((prev) => !prev)
    }
  
    return(
        
        <div className={styles.albumContainer}>
        {showCreateAlbums ? <CreateAlbums albums={albums} setAlbums={setAlbums}/>:""}
          <div className={styles.albums}>
         
            <h2>Your albums</h2>
            <button onClick={handleAlbums} style={{color:showCreateAlbums?"red":"", border:showCreateAlbums?"2px solid red":""}}>
                {showCreateAlbums?"Cancle":"Add albums"}</button>
          </div>

          <div>
          <div className={styles.albumCardContainer}>
            {albums.map((album, i)=>(
             
                <div className={styles.albumCard} key={i}>
                   <div className={styles.cardImg}> <img src="img.png"/></div>
                    {album}
                 </div>
          
            ))}
           </div>
          </div>
        </div>
    
    )
}
