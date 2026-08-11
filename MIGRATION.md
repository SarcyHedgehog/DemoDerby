# Multisynq to Photon migration

## What changed

The original `DerbyGame`, `CarModel`, and `DerbyView` depended on Multisynq’s replicated deterministic model. Photon Realtime provides rooms, events and master-client election rather than a replicated JavaScript object model, so the migration separates the game into three responsibilities:

1. `DerbyModel` owns all authoritative rules and can run or be tested without a network.
2. `PhotonRoom` forwards player inputs to the master client and broadcasts model snapshots.
3. `ArenaView` interpolates received snapshots and renders effects locally.

## Host migration

The master persists a complete snapshot in the `dd_state` room property approximately once per second. When Photon promotes another participant, that client restores the latest snapshot, reconciles it with the actors still in the room, and resumes the simulation. Persistent scores and the current round therefore survive an ordinary host departure.

## Deployment checklist

- Create a separate Photon Realtime application named DemoDerby.
- Add its ID as the `PHOTON_APP_ID` repository secret.
- Ensure `GH_PAGES_DEPLOY_TOKEN` can write to `SarcyHedgehog/sarcastichedgehog.com`.
- Test two browsers, mobile controls, invitations, host departure and reconnection locally.
- Merge `photon-migration` into `main` only after approval.
- Confirm the workflow and GitHub Pages deployment complete.
- Mark DemoDerby as Photon — Live on `vibegames.html`.

## Deliberately retained

The original directional damage system, performance degradation, automatic restarts and spectator behavior remain central to the game. Playtesting capped the active arena at five cars, with later arrivals spectating. The write-off threshold was increased from twenty to one hundred, and wrecks now fade from the arena after five seconds.
