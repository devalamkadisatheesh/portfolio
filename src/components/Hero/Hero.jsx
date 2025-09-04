import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hi, I'm Satheesh</h2>
        <p className={styles.description}>
         Frontend Developer with 1 year of experience at Tech Mahindra, skilled in React, Next.js & Node.js, passionate about growing into a full-stack role.
        </p>
        <a href="mailto:devalamkadikumar@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="https://media.licdn.com/dms/image/v2/D5603AQEImWxs-iY2gA/profile-displayphoto-crop_800_800/B56ZkPmaUGIAAI-/0/1756903352019?e=1759968000&v=beta&t=EBHvrQubQ8Tf_xEs8RtQGZMJ-iQ4GH9nOGK1ERebIj8"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
