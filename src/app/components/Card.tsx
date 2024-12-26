"use client";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/classicStyles.module.css";
import Pochacco from "../assets/pochacco.svg";

export type CardProps = {
  name: string;
};

const Card = ({ name }: CardProps): React.ReactElement => {
  let paragraph = "";
  const dianaText =
    "This is the long awaited christmas card that had so many christmas \
            dinner complications get in the way of its completion lol. But it's \
            done! As a little token of appreciation and to celebrate christmas \
            virtually with you, I send you this e-christmas card! I hope you're \
            enjoying the christmas break with your loved ones and get as much \
            rest as you can. I am soso thankful for our friendship that we've \
            built through ss and so glad that we can celebrate christmas/new \
            years in this little online way LOL to many more years of friendship \
            and pochaccos!!!";
  if (name == "diana" || name == "Diana") {
    paragraph = dianaText;
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <Image
            className={styles.image}
            src={Pochacco}
            width={135}
            alt="pochacco"
          />
          <h3 className={styles.greeting}>HAPPY HOLIDAYS</h3>
        </div>
        {/* Left side (Cover of the card) */}
        <div className={styles.cardInside}>
          <p className={styles.coverText}>Hi {name},</p>
          <p className={styles.text}>{paragraph}</p>
          <p className={styles.signature}>Love, Jenny</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
