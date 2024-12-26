"use client";
import React from "react";
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

  const samText =
    "WAAHAA I hope you had a wonderful christmas Sam!! Happy New Years too! \
      haha I planned to have this done before Christmas but last minute dinner plans got in the way but alas it is here hehe \
      As a little token of appreciation and to celebrate the holidays with you I present this e-card LOL \
      Pochacco themed of course. I'm soso grateful for the friendship we've built over the year (I think it's been a year) and here's to many more!! \
      I hope you had a christmas full of food, warmth, and joyful times with loved ones that'll continue into the new year too!";

  if (name == "diana" || name == "Diana") {
    paragraph = dianaText;
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  if (name == "sam" || name == "Sam") {
    paragraph = samText;
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
