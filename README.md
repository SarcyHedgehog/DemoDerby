# DemoDerby

DemoDerby is a fast, top-down multiplayer demolition derby for two to five active drivers, with additional visitors joining as spectators. It began as a deterministic Multisynq experiment and has been rebuilt on Photon Realtime while retaining the repository’s complete history.

## The rules

- The last car moving wins the round.
- Cars can absorb 100 damage.
- Front-first hits deal the most damage, side hits deal medium damage, and rear contact deals the least.
- At 75 damage a car loses much of its top speed.
- Wrecks remain in the arena as obstacles.
- A maximum of five cars race at once. Extra and late-arriving users can spectate and follow a driver.

## Controls

| Action | Keyboard | Touch |
| --- | --- | --- |
| Accelerate | `W` or `↑` | GO |
| Brake/reverse | `S` or `↓` | BRAKE |
| Steer | `A`/`D` or `←`/`→` | Arrow buttons |

## Photon architecture

Photon elects one room master as the authoritative simulation host. All clients send control state to that host, which runs the fixed 50 Hz game model and distributes snapshots at approximately 15 Hz. Views interpolate snapshots for smooth rendering. A complete snapshot is periodically stored in Photon room properties, allowing the next master client to resume the match if the host leaves.

The public client never contains a private server credential. A Photon App ID identifies the cloud application but is not a secret.

## Local development

1. Create a **Photon Realtime** application in the Photon dashboard.
2. Copy `config.example.js` to `config.js`.
3. Put the Realtime App ID in `PHOTON_APP_ID`.
4. Serve the folder over HTTP; ES modules do not run reliably from `file://`.

```powershell
npm run serve
```

Open `http://localhost:8770/` in two browsers or devices and use the same arena code.

The join screen also includes a three-bot practice arena. It requires no Photon connection and is useful for learning the damage system or checking a build.

## Tests

```powershell
npm test
```

The tests cover countdowns, authoritative damage and destruction, winner selection, snapshot restoration, and disconnected controls.

## Project layout

- `src/game-model.js` — pure authoritative physics and match rules
- `src/photon-room.js` — Photon rooms, events, snapshots and host recovery
- `src/arena-view.js` — interpolated Canvas renderer and visual effects
- `src/audio-engine.js` — synthesized engine, impacts, countdown and fanfare
- `src/main.js` — application UI, input, invitations and PWA integration
- `tests/` — model tests runnable without a browser
- `assets/` — original car artwork
- `demolition - Copy.html` — historical Multisynq implementation retained for reference

## Deployment

The `main` branch workflow builds `config.js` from the repository’s `PHOTON_APP_ID` secret, copies only production files into the `demoderby` directory of `SarcyHedgehog/sarcastichedgehog.com`, and commits the update there. `GH_PAGES_DEPLOY_TOKEN` grants that workflow access to the website repository.

See [MIGRATION.md](MIGRATION.md) for the migration design and deployment checklist.
