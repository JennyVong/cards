"use client";
import React from "react";
import Image from "next/image";
import styles from "../styles/classicStyles.module.css";
import Pochacco from "../assets/pochacco.svg";
import Chococat from "../assets/chocochristmas.svg";
import KuromiChimney from "../assets/kuromichimney.svg";
import KuromiStocking from "../assets/kuromichristmas.svg";

export type CardProps = {
  name: string;
};

const Card = ({ name }: CardProps): React.ReactElement => {
  let paragraph = "";
  let image = Pochacco;
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

  const wendellText =
    "Merry Christmas and Happy New Year! To celebrate with you kinda, I present to you, this amazing e-card. The Chococat looks like Nina a bit LOL so I thought it was perfect for you. \
    I hope you had a wonderful christmas with food, more food, cats, and memorable times with loved ones. \
    Super thankful for the friendship we've built over the year and the rest of the bunch. \
    I've said it before but you make me excited for adulthood and soso grateful that you're someone I can look up to. \
    Cheers to many more years of friendship and chaotic workouts LOL";

  const quinnText =
    "Merry Christmas and Happy New year!!! I hope you're having a wonderful holiday break full of food, hot chocolate, more food, warmth, and memorable times with loved ones. \
    I know we just recently met but you're definitely a kind person and I always enjoy working out with you when we can. \
    This is just my mini way of celebrating christmas with you and I hope you do like the Kuromi in a chimney decorated with colorful lights LOL \
    I hope you enjoy the rest of your break and we'll workout soon!!";

  const joText =
    "Merry Christmas and Happy New Year!! I hope you've had a wonderful christmas Jo full of warmth and good times with your loved ones. \
    I know this is a little late but here's my small way of celebrating christmas with you so I hope you like the e-card LOL \
    Felt like Kuromi would be more your vibe, it was either Kuromi or Badtz-Maru but I went with Kuromi so I hope you like her a bit at least (pls). \
    Cheers to a year of friendship with you and the rest of the bunch and to many more!";

  if (name == "diana" || name == "Diana") {
    paragraph = dianaText;
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  if (name == "sam" || name == "Sam") {
    paragraph = samText;
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  if (name == "wendell" || name == "Wendell") {
    paragraph = wendellText;
    image = Chococat;
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  if (name == "quinn" || name == "Quinn") {
    paragraph = quinnText;
    image = KuromiChimney;
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }
  if (name == "jo" || name == "Jo") {
    paragraph = joText;
    image = KuromiStocking;
    name = name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardFront}>
          {image == Pochacco ? (
            <Image
              className={styles.pochacco}
              src={image}
              width={135}
              alt="pochacco"
            />
          ) : (
            <Image
              className={styles.image}
              src={image}
              width={135}
              alt="character"
            />
          )}
          <h3 className={styles.greeting}>HAPPY HOLIDAYS</h3>
        </div>
        {/* Left side (Cover of the card) */}
        <div className={styles.cardInside}>
          <p className={styles.coverText}>Hi {name},</p>
          <p className={styles.text}>{paragraph}</p>
          {name == "Diana" ||
          name == "Sam" ||
          name == "Quinn" ||
          name == "Kathy" ||
          name == "Vitasta" ? (
            <p className={styles.signature}>Love, Jenny</p>
          ) : (
            <p className={styles.signature}>- Jenny</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
