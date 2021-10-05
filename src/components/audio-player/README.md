# Audio Player Usage
-----------------


## Events

### beforeTrackChange

example:

```javascript
const playerEl = document.querySelectorl(".js-marble-audio-player");

const marblePlayer = new AudioPlayer({ wrapperEl: playerEl });

const firstTrack = marblePlayer.currentTrack;

playerEl.addEventListener("beforeTrackChange", ()=> { firstTrack.id == marblePlayer.currentTrack.id });

...
=> true
```

### afterTrackChange

example:

```javascript
const playerEl = document.querySelectorl(".js-marble-audio-player");

const marblePlayer = new AudioPlayer({ wrapperEl: playerEl });

const firstTrack = marblePlayer.currentTrack;

playerEl.addEventListener("afterTrackChange", ()=> { firstTrack.id == marblePlayer.currentTrack.id });

...
=> false
```
