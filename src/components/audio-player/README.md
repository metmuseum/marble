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
f

transcript: "Figure, Abelam People\nSepik region, New Guinea (1981.415.1, 1978.412.871), Catalogue 27\n(181 words)\n\nNARRATOR: The carvings on this platform were created as part of the initiation rites of the Abelam people of New Guinea. \n\nImagine this scene: a group of young men enter the dark interior of a ceremonial house, prepared to encounter powerful and sacred spirits of the forest. One by one, they crawl on their hands and knees between the legs of a carved statue, and emerge into a fire-lit chamber lined with elaborate sculptures, like the two you see here. The statues were once brilliantly painted. Curator Eric Kjellgren:\n\nERIC KJELLGREN: 15:41.This experience of emerging from the darkness into, essentially, the light and the color and the flickering light of the fire on the carvings themselves, 15:46 was intentionally designed to dazzle the initiates to essentially give them the experience of the divine through visual qualities alone. \n\nNARRATOR: For the Abelam, the paint was considered to be a magical substance that gave the carvings their supernatural power, and it was washed off after the rites were completed. \n\nNow, take a closer look at the figure on the left. To hear more about its imagery press play.\n\nNOTE: This was getting too long, so I made a few deletions.\n\nLEVEL 2 \n (187 words)\n\nNARRATOR: At the very top of this sculpture, you see two birds' heads. They have the distinctive long beaks of hornbills.* The large face below them is shown as though it were an Abelam man in full ceremonial dress.* And below the large face is carved a smaller figure, dressed similarly, with a rounded body and its arms raised.*\n\nERIC KJELLGREN: Now although these images are in human form, they actually depict spirits which live out in the forests and these spirits are known as nggwalndu. These spirits are particularly associated with yams.\n\nAnd the yam species that they had among the Abelam was actually a gigantic species. They could grow up to about twelve feet long and as thick around as a human leg. In fact, yams could grow almost as large as the wooden image we're looking at here now.\n\nNARRATOR: Each prominent man had a ceremonial yam-exchange partner in a neighboring village. The men competed to see who could present the other with a larger yam. The exchange constituted a form of ritual warfare, dissipating social tension that might otherwise have erupted in the form of physical attack.\n\nNOTE: Existing Stop 1715 now becomes a second level, with new narration\n\nPARTIAL RE-DO\nEXISTING STOP 1718 Figure, Kambot\nSepik Region, New Guinea (1978.412.823), Catalogue 52\n246 words\n\nNARRATOR-This impressive, life-size figure originally adorned a supporting post in a men's ceremonial house-among the Kambot people of New Guinea. Curator Eric Kjellgren:\n\nERIC KJELLGREN--Although it represents a remote ancestor, this image is actually decorated much like a Kambot man would be when wearing essentially his best ritual finery.  If you look around the neck of the image, you can see a series of crescents that go down the chest.  These are almost certainly images of pearl shells.\n\nNARRATOR: One of the most unusual aspects of this figure is that his face can be interpreted as several distinct images. The elongated form of the head can be seen as the head of a crocodile*, or as a stylized human face.* The raised sections on the outside of the face represent two long narrow eyes, meeting at a long nose, which stretches down to a small, red mouth at the base of the face.*\n\nIf you look at the very top of the forehead, you see a circle with a red center.* This represents the head of a second figure. The long, curved eyes appear as arms, descending down on either side to two hands, which form the nostrils of the larger face.* Clasped in the hands, the nose of the first image here likely represents a flute. Such flutes were secret objects, known only to initiated men. This subtle reference almost certainly indicates that the statue contains further hidden imagery understood only by the initiated.\n\nNOTE: Eric: it would be great to include the Sepik flute recordings you mentioned. How could we get them?"
