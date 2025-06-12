# DemoDerby 🚗💥

**A real-time multiplayer demolition derby game built with HTML5 Canvas, JavaScript, and powered by MultiSynq for seamless synchronization!**

[![DemoDerby Gameplay Screenshot/GIF](https://sarcyhedgehog.github.io/DemoDerby/screenshot.png)](https://sarcyhedgehog.github.io/DemoDerby/demolition.html)


➡️ **[Play DemoDerby Live!](https://sarcyhedgehog.github.io/DemoDerby/demolition.html)** ⬅️

---

## About The Game

DemoDerby is a top-down 2D arcade-style demolition derby where players battle it out in an oval arena. The last car standing wins the round! Thanks to MultiSynq, the gameplay is synchronized in real-time across all connected players, allowing for chaotic and fun multiplayer action.

## Features

*   **Real-time Multiplayer:** Smooth, synchronized gameplay for up to 8 players powered by [MultiSynq](https://multisynq.io/).
*   **Diverse Vehicles:** 8 unique car sprites for players.
*   **Damage System:** Collide with opponents to deal damage. Watch your own damage meter!
*   **Performance Degradation:** Cars become slower as they take more damage.
*   **Wrecked State:** Vehicles get wrecked after taking maximum damage, becoming obstacles.
*   **Round-Based Gameplay:**
    *   Wait for players to join.
    *   "Get Ready!" countdown before each round.
    *   Dynamic round restarts with all connected players.
*   **Spectator Mode:** Join mid-game and watch the action until the next round.
*   **Desktop & Mobile Controls:** Play with keyboard (WASD/Arrows) or on-screen touch controls.
*   **Arcade Physics:** Fun, bouncy collisions and vehicle movement.
*   **Dynamic Arena:** Oval track with inner and outer boundaries.

## How to Play

*   **Objective:** Be the last car running in the arena!
*   **Controls:**
    *   **Desktop:**
        *   `ArrowUp` / `W`: Accelerate
        *   `ArrowDown` / `S`: Brake / Reverse
        *   `ArrowLeft` / `A`: Turn Left
        *   `ArrowRight` / `D`: Turn Right
    *   **Mobile (Touch):**
        *   On-screen buttons for Accelerate, Brake, Turn Left, and Turn Right.
*   **Gameplay:**
    1.  Join a session (scan the QR code or share the link).
    2.  Wait for at least 2 players to start the pre-round countdown.
    3.  Once the round starts, drive around and smash into other cars!
    4.  Avoid taking too much damage yourself.
    5.  If you're wrecked, you'll have to wait for the next round.
    6.  If you join mid-game, you'll spectate until the current round ends.

## Technical Stack

*   **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
*   **Rendering:** HTML5 Canvas API
*   **Multiplayer Synchronization:** [MultiSynq Client SDK](https://multisynq.io/docs/client/)
*   **Styling (UI):** [TailwindCSS (via CDN)](https://tailwindcss.com/)
*   **Font:** "Press Start 2P" (via Google Fonts)

## Getting Started (Local Development)

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/SarcyHedgehog/DemoDerby.git
    cd DemoDerby
    ```
2.  **Configuration (`config.js`):**
    *   The game expects a `config.js` file in the root directory to provide your MultiSynq API key and App ID. Create this file with the following content:
        ```javascript
        // config.js
        window.APP_CONFIG = {
            API_KEY: "YOUR_MULTISYNQ_API_KEY",
            APP_ID: "com.yourdomain.demoderby" // Replace with your actual App ID
        };
        ```
    *   Replace `"YOUR_MULTISYNQ_API_KEY"` with your actual API key from [multisynq.io/coder](https://multisynq.io/coder).
    *   Choose a unique `APP_ID` (e.g., `com.yourgithubusername.demoderby`).
    *   **Note:** If `config.js` is not found, the game will use placeholder values which may not work for public deployment.
3.  **Run the game:**
    *   You can open the `demolition.html` file directly in your browser.
    *   For the best experience (and to avoid some browser security restrictions with local files), serve the directory using a simple local web server. For example, if you have Python installed:
        ```bash
        python -m http.server
        ```
        Then navigate to `http://localhost:8000/demolition.html` in your browser.

## Key Files

*   `demolition.html`: The single HTML file containing all the game logic, rendering, and UI.
*   `config.js` (you create this): For MultiSynq API credentials.
*   `assets/`: Contains the car sprite images.

## Future Ideas & Roadmap

*   Implement more precise polygonal collision detection.
*   Add sound effects for collisions, engine, etc.
*   Introduce power-ups or special abilities.
*   Different arena layouts.
*   Persistent player scores or leaderboards.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/SarcyHedgehog/DemoDerby/issues).


---