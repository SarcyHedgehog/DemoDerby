# DemoDerby
# MultiSynq Demolition Derby 🚗💥💨

A real-time multiplayer top-down demolition derby game built with HTML, CSS, JavaScript, and powered by [MultiSynq](https://multisynq.io) for seamless state synchronization.

## Features (Current & In-Progress)

*   **Real-time Multiplayer:** Multiple players can join a session and see each other's cars move and interact.
*   **Top-Down View:** Classic arcade-style perspective.
*   **Player-Controlled Cars:** Each player controls their own vehicle.
*   **Arena:** An oval dirt track with an inner inaccessible area (currently basic rectangular collision for boundaries).
*   **Damage System (Partially Implemented):**
    *   Cars can take damage from collisions.
    *   Cars are visually "wrecked" (💥) upon reaching max damage.
    *   (Damage effects on speed and detailed hit location logic are future enhancements).
*   **Custom Car Visuals:** Uses unique PNG images for each player's car (up to 8 distinct visuals).
*   **Mobile-Friendly Controls:** On-screen touch controls for mobile devices (landscape orientation preferred).
*   **Desktop Controls:** Arrow keys for movement.
*   **Player HUD:** Displays the current player's damage score.
*   **MultiSynq Session Sharing:** Built-in QR code widget for easy session joining.
*   **Game Flow:**
    *   Waits for a minimum of 2 players to start a round.
    *   Initial 5-second countdown before the first round begins.
    *   Players joining mid-game become spectators until the next round.
    *   Rounds restart after a game over (win/draw) with a 10-second countdown.
    *   Spectators automatically join the next round if slots are available (up to 8 racers).

## Getting Started

1.  **Clone the Repository (if applicable) or Download Files.**
2.  **Set up Configuration:**
    *   You will find a file named `config.example.js`.
    *   **Copy** this file and rename the copy to `config.js`.
    *   **Edit `config.js`** and fill in your actual MultiSynq API Key and a unique App ID:
        ```javascript
        // config.js - DO NOT COMMIT THIS FILE if it contains real keys
        window.APP_CONFIG = {
          API_KEY: "YOUR_MULTISYNQ_API_KEY", // Get from https://multisynq.io/coder
          APP_ID: "com.yourdomain.yourgame"  // e.g., com.sarcastichedgehog.demolition
        };
        ```
        *   The `config.js` file is typically excluded from version control (e.g., via `.gitignore`) to protect your API key.
3.  **Place Assets:**
    *   Ensure you have an `assets` folder in the same directory as `demolition.html`.
    *   Place your car images (`1car.png` through `8car.png`) inside this `assets` folder.
4.  **Run a Local Web Server:**
    *   Open your terminal or command prompt.
    *   Navigate to the directory where `demolition.html` is located (e.g., `cd /path/to/your/demolition_derby_project`).
    *   Start a simple HTTP server. If you have Python installed:
        *   Python 3: `python -m http.server`
        *   Python 2: `python -m SimpleHTTPServer`
    *   The server will usually indicate the port it's running on (e.g., `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)`).
5.  **Open in Browser:**
    *   Open your web browser and navigate to `http://localhost:8000/demolition.html` (or the appropriate port).
6.  **Multiplayer:**
    *   To play with others, open the same URL in another browser tab or on another device on the same local network.
    *   Alternatively, use the QR code displayed by the MultiSynq widget (usually bottom-left) to join from another device. If your web server and MultiSynq API key are configured for public access, others can join over the internet.

## How to Play

*   **Desktop:**
    *   **Arrow Up / W:** Accelerate
    *   **Arrow Down / S:** Brake / Reverse
    *   **Arrow Left / A:** Turn Left
    *   **Arrow Right / D:** Turn Right
*   **Mobile (On-Screen Controls):**
    *   Use the displayed arrow buttons.
*   **Objective:** Be the last car running! Ram into other cars to damage them. Avoid taking too much damage yourself.

## Current Known Issues & Areas for Improvement

*   **Oval Boundary Collision:** The physics for colliding with the oval track walls (especially the curved parts) is currently very basic and uses a rectangular approximation. Cars may not bounce realistically or can get stuck.
*   **Car-to-Car Collision Physics & Hit Location:**
    *   Collision detection is simplified (circular/AABB).
    *   Detailed hit location (front, side, rear) for precise damage calculation is not yet implemented.
    *   Physics response to collisions (e.g., momentum transfer, spin-outs) is rudimentary.
*   **Spectator View:** While spectators can join, their view of the game is the same as active players. A dedicated spectator UI could be added.
*   **Visual Polish:** More detailed track graphics, car damage visuals (beyond the '💥' emoji), particle effects for collisions, etc.
*   **Sound Effects.**
*   **Lobby System:** A more formal pre-game lobby for players to gather before starting.

## Technology Stack

*   HTML5
*   CSS3 (with TailwindCSS via CDN for rapid UI styling)
*   Vanilla JavaScript (ES6+)
*   [MultiSynq Client SDK](https://multisynq.io/docs/client/)
