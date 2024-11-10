/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const suit = [
    { symbol: "♥", name: "hearts" },
    { symbol: "♦", name: "diamonds" },
    { symbol: "♣", name: "clubs" },
    { symbol: "♠", name: "spades" }
  ];

  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suit[Math.floor(Math.random() * suit.length)];

  document.getElementById("suitTop").innerText = randomSuit.symbol;
  document.getElementById("valueCard").innerText = randomValue;
  document.getElementById("suitBottom").innerText = randomSuit.symbol;

  document.getElementById(
    "suitTop"
  ).className = `topsuit ${randomSuit.name}`;
  document.getElementById(
    "valueCard"
  ).className = `cardvalue ${randomValue.name}`;
  document.getElementById(
    "suitBottom"
  ).className = `bottomsuit ${randomSuit.name}`;

  generateRandomCard();
};
