import { useEffect, useRef, useState } from "react";
import styles from "./userAlbum.module.css";

export default function UserAlbum({ selectedAlbum, handleBack }) {
  const [imageName, setImageName] = useState({imgTitle:"",imgLink:""});
  const [images, setImages] = useState([]);
  const [showSearchInput, setShowSeacrhInput] = useState(false);
  const [showUploadForm, setshowUploadForm] = useState(false);
  const inputRef = useRef(null)

  function addImages() {
    if (imageName) {
      setImages([...images, imageName]); 
      setImageName({ imgTitle: "", imgLink: "" });
    }
  }
  function handleSearchInput(){
      setShowSeacrhInput((prev) => !prev)
    }

  useEffect(() => {
    if (showSearchInput) {
      inputRef.current.focus();
    }
  });

  function handleUploadForm(){
    setshowUploadForm((prev) => !prev)
  }

  return (
    <div className={styles.albumDetails}>
        {showUploadForm &&<UploadImage selectedAlbum={selectedAlbum} addImages={addImages} imageName={imageName} setImageName={setImageName}/>}
   
         <div className={styles.photoContainer}>

         <div className={styles.photoContainerHead}></div>
        <div style={{display:"flex"}}>
        <button className={styles.backBtn}  onClick={handleBack}><img src="back.png" alt="back btn"/></button>
        <h2 className={styles.photoTitle}>Images in {selectedAlbum}</h2>
        </div>
          <div className={styles.searchBar}>
           {showSearchInput?  <input placeholder="Search..." ref={inputRef}/>:""}
           {showSearchInput? <img src="close.png" alt="search Icon" className={styles.searchImg} onClick={handleSearchInput}/>
                           : <img src="search.png" alt="search Icon" className={styles.searchImg} onClick={handleSearchInput}/>}
           
            <button className={styles.addImagesBtn} onClick={handleUploadForm} style={{color:showUploadForm?"red"
            :"",backgroundColor:showUploadForm?"rgba(252, 214, 214, 0.68)":"",border:showUploadForm?"2px solid red":""}}>
                {showUploadForm?"Cancle":"Add Image"}</button>
          </div>
       
      </div>
   
      <div>
        {images.length > 0 ? (
          images.map((img, i) => <div key={i}>
          <img src={img.imgLink}/>
          <p>{img.imgTitle}</p>
          
          </div>)
        ) : (
          <p>No images added yet.</p>
        )}
      </div>
    </div>
  );
}


function UploadImage({selectedAlbum, addImages,imageName, setImageName}){
    return(
        <div className={styles.imageUploadContainer}>
        <h2>Add image to {selectedAlbum}</h2>
        <input placeholder="Title" value={imageName.imgTitle} onChange={(e) => setImageName({...imageName, imgTitle:e.target.value})}/><br/>
        <input placeholder="Image URL" value={imageName.imgLink} onChange={(e) => setImageName({...imageName, imgLink:e.target.value})}/>
        <div className={styles.buttons}>
            <button className={styles.clearBtn}>Clear</button>
            <button className={styles.createBtn} onClick={addImages}>Add</button>
        </div>
        </div>
    )
}
