Random Game

A simple web game built with HTML, CSS, and JavaScript that shows random colors or elements (or whatever your game logic is).

🎯 Features

Generates random colors from a predefined list

Changes UI element(s) (like a square/div) color on events (e.g. mouse enter)

Clean, minimal interface

🧩 Project Structure
Random-Game/
│
├── index.html      — Main HTML page  
├── style.css       — Styles for layout, colors, etc.  
├── script.js       — JavaScript logic (random color, event listeners)  
└── README.md        — Project documentation  

🛠️ How It Works / How to Use

Open index.html in a browser.

The page displays one or more boxes (divs) styled via CSS.

On some user interaction (e.g. mouseenter), an event listener triggers a function to pick a random color from a list and apply it to the box.

You can customize the colors list in script.js.

🔧 Usage / Setup

Clone the repository:

git clone https://github.com/Bankal-2708/Random-Game.git


Navigate into the directory:

cd Random-Game


Open index.html in a web browser to run locally.

🧠 Code Snippet (Random Color Logic Example)
let s = document.getElementById("sq2");
let clr = ["red", "pink", "green", "skyBlue"];

s.addEventListener("mouseenter", function () {
  let bg=Math.floor(Math.random()*clr.length);
  s.style.backgroundColor=clr[bg];
});

🧠 Another Code Snippet (Random Color Logic Example)

let s = document.getElementById("sq4");

s.addEventListener("mouseenter", function () {
  let r1=Math.floor(Math.random()*256);
  let r2=Math.floor(Math.random()*256);
  let r3=Math.floor(Math.random()*256);
  s.style.backgroundColor=`rgb(${r1},${r2},${r3})`
});


✅ To-Do / Future Improvements

Add more interactive behaviors (e.g. on click, double click)

Animate color transitions

Add more color schemes or allow user to input custom colors

Add mobile/responsive support

Improve UI / add visuals
