"use client";
import Card from "./components/Card";
import { Frank_Ruhl_Libre, Caveat } from "next/font/google";
import React, { useState } from "react";
import styles from "./styles/classicStyles.module.css";

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frand-ruhl-libre",
  subsets: ["latin"],
  weight: "700",
});

const caveat = Caveat({
  weight: "400",
  variable: "--font-caveat",
  subsets: ["cyrillic"],
});

export default function Home() {
  const nameList = [
    "Diana",
    "diana",
    "Sam",
    "sam",
    "quinn",
    "Quinn",
    "wendell",
    "Wendell",
    "Jo",
    "jo",
    "Raj",
    "raj",
    "Johnny",
    "johnny",
  ];
  const [name, setName] = useState<string>(""); // User's input
  const [cardName, setCardName] = useState<string | null>(null); // Name to display on the card
  const [error, setError] = useState<string | null>(null); // Error message

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from refreshing the page
    // Input validation
    if (!name.trim()) {
      setError("Name cannot be empty.");
      return;
    }
    if (name.length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }

    if (!nameList.includes(name.trim())) {
      setError("Not valid name.");
      return;
    }
    setError(null); // Clear any existing error
    setCardName(name); // Update the card with the entered name
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // Update the name as the user types
  };

  return (
    <div className={styles.container}>
      {/* Input Form */}
      {!cardName && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Enter your name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Your name"
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Show My Card
          </button>
          {error && <p className={styles.error}>{error}</p>}{" "}
          {/* Error message */}
        </form>
      )}
      {cardName && (
        <>
          <main
            className={`${frankRuhlLibre.variable} ${caveat.variable} antialiased`}
          >
            <Card name={cardName} />
          </main>
        </>
      )}
    </div>
  );
}
