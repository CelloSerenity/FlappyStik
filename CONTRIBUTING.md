# Contributing to FlappyStik

Welcome! FlappyStik is designed to be easily extensible. This guide explains how to navigate the project structure, add new powerups, create custom worlds, add music, and tweak the game's difficulty.

## Project Structure

```
/
├── index.html          # Main game entry point
├── css/
│   └── style.css       # Game styling
├── js/
│   ├── main.js         # Core game logic (engine, loop, state)
│   ├── audio.js        # Audio controller and music logic
│   └── powerups/       # Individual powerup behavior scripts
│       ├── shield.js
│       ├── shrink.js
│       └── ...
├── config/
│   ├── difficulties.json  # Physics/gameplay settings for each difficulty
│   ├── powerups.json      # Visual config (color, duration) for powerups
│   ├── music.json         # Melodies for Title, Game, and Victory themes
│   └── worlds/            # Level configurations
│       └── world1.json
└── CONTRIBUTING.md
```

## Configuration

The game is data-driven. You can modify gameplay without touching the core code by editing files in `config/`.

### 1. Difficulty (`config/difficulties.json`)
Defines the physics parameters:
- **gravity**: Downward acceleration.
- **jump**: Upward velocity when flapping.
- **speed**: Horizontal speed of pipes.
- **gap**: Vertical space between pipes.
- **spawn**: Pipe spawn rate (in frames).
- **variation**: Randomness in pipe height.

### 2. Worlds & Levels (`config/worlds/*.json`)
Each file represents a world.
- **theme**: Customizes colors for `skyGradient`, `groundColor`, `pipeGradient`.
- **levels**: Object defining each level (1-10).
    - **pipes**: Target score to beat the level.
    - **diff**: Difficulty preset (e.g., "EASY", "HARD").
    - **powerups**: Array of allowed powerup IDs (e.g., `["BONUS", "SHIELD"]`).

### 3. Music (`config/music.json`)
Defines the melodies for the game using simple note arrays:
- Format: `[frequency_hz, duration_beats]` or `{ "f": freq, "d": duration }` for victory.
- **TITLE**: Melody played on the home screen.
- **GAME**: Melody played during gameplay.
- **VICTORY**: Fanfare played when completing a level.

## Adding a New Powerup

Powerups are modular. To add a new one, follow these steps:

### Step 1: Define Config
Open `config/powerups.json` and add an entry:
```json
"SUPER_JUMP": { 
    "color": "#ff0000", 
    "duration": 0 
}
```

### Step 2: Create Behavior Script
Create a new file `js/powerups/super_jump.js`:
```javascript
PowerupSystem.register('SUPER_JUMP', {
    // Draw the icon inside the powerup bubble
    drawIcon: function(ctx, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, -5);
        ctx.lineTo(5, 5);
        ctx.lineTo(-5, 5);
        ctx.fill();
    },
    // Define effect on collection
    onCollect: function(bird, config) {
        bird.velocity = -15; // Mega jump!
    }
});
```

### Step 3: Import Script
Add your script to `index.html` **after** `js/main.js`:
```html
<script src="js/main.js"></script>
<!-- ... other powerups ... -->
<script src="js/powerups/super_jump.js"></script>
```

### Step 4: Enable in Game
Add `"SUPER_JUMP"` to the `powerups` list in `config/worlds/world1.json` for the levels where you want it to appear.

## Adding Custom Music

1.  Open `config/music.json`.
2.  Edit the `TITLE`, `GAME`, or `VICTORY` arrays.
3.  Frequencies map to musical notes (e.g., A4 = 440.00, C4 = 261.63).
4.  Duration is relative to the beat (0.5 = eighth note, 1.0 = quarter note).

## Development Setup

Since the game uses external JSON configuration files, modern browsers will block file access if you open `index.html` directly (due to CORS policy).

**You must run a local web server.**

### Python
```bash
python3 -m http.server
```
Then open `http://localhost:8000`.

### VS Code
Install the **Live Server** extension, right-click `index.html`, and select "Open with Live Server".

Happy coding!
