import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptop_with_suit.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p style={{fontSize:"20px"}}>
                I have 1 year of experience at Tech Mahindra, skilled in HTML, CSS, JavaScript, React, Next.js, and Node.js. I'm passionate about building responsive and interactive web applications, and I'm eager to expand my skills to become a full-stack developer. I'm a team player with strong problem-solving skills, and I'm excited to contribute to innovative projects in a new role.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
