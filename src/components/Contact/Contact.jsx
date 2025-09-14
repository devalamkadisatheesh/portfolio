import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p >Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
           <a  href="mailto:devalamkadikumar@gmail.com">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a  href="mailto:devalamkadikumar@gmail.com"><span className={styles.linkname}>devalamkadikumar.gmail.com</span></a>
       </a> </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/satheeshd/">
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a   href="https://www.linkedin.com/in/satheeshd/"><span className={styles.linkname}>linkedin.com/satheeshd</span></a>
          </a>
        </li>
        <li className={styles.link}>
           <a  href="https://github.com/devalamkadisatheesh">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a  href="https://github.com/devalamkadisatheesh"><span className={styles.linkname}>github.comdevalamkadisatheesh/</span></a>
       </a> </li>
      </ul>
    </footer>
  );
};
