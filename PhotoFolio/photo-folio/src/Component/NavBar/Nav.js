import styles from "./Nav.module.css"

export default function NavBar(){
    return(
        <>
        <div className={styles.navbarContainer}>
         <div>
         <img src="logo.png"/>
         </div>
         <h3>PhotoFolio</h3> 
        </div>
        </>
    )
}