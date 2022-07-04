import React from "react";
import styles from "../styles/404.css";


export default function NotFound() {
    return (
        <div className={styles.NF_container}>
            <h1 className={styles.NF_title}>404 NOT FOUND</h1>
            <h2>Sorry, cette page n'a pas été trouvée ! </h2>
        </div>
    );
};