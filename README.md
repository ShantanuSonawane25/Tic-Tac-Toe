# 🎮 Tic Tac Toe Game

A simple and interactive **Tic Tac Toe** game built using **HTML**, **CSS**, and **JavaScript**. Two players can take turns playing on a 3×3 grid, with the game automatically detecting **wins** and **draws**, and providing a button to **reset** or **start a new game**.

## ✨ Features

- 🟦 Interactive 3×3 grid for smooth gameplay  
- ❌🟢 Two-player support (X and O)
- ✅ Win detection with announcement
- 🤝 Draw detection when no winner
- 🔁 New Game / Reset functionality
- 📱 Responsive layout – works on all screen sizes
- 🎨 Clean UI using basic CSS styling

## 🚀 Technologies Used

- **HTML** – for basic page structure  
- **CSS** – for styling the grid and UI elements  
- **JavaScript** – for game logic, event handling, and DOM manipulation


## 📂 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
📁 Project Structure

tic-tac-toe/
│
├── index.html         # Main HTML file
├── style.css          # CSS styling
└── script.js          # JavaScript logic
🧠 Game Logic Overview
Uses a winPatterns array to check all possible winning combinations.

Switches player turns using a boolean flag.

Disables boxes once the game ends (win or draw).

Displays winner or draw message.

Includes Reset and New Game buttons to restart the game.

💡 Future Improvements
Add single-player mode with basic AI

Highlight the winning pattern

Add sound effects and animations
