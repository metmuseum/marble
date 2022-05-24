import { text } from "@storybook/addon-knobs";
import AudioPlayer from "./audio-player.js";
import greekHall1x1 from ".storybook/assets/images/greek-hall/1x1";

const exampleResponse = [{
	id: "C0276F7DFD034191B37BB04E9048BB03",
	title: "Jumping Jehoshaphat",
	description: "TIL Jehoshaphat is in the Chrome spell checker. 123456",
	stopNumber: "6611",
	rank: "1",
	image: {
		alt: "Promotional graphic for \"Inspiring Walt Disney\"",
		height: 674,
		width: 1200,
		w2400: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=2400&amp;w=1200&amp;hash=ACDB9082199115342909831E388C11F7",
		w1600: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=1600&amp;w=1200&amp;hash=3E27038FEFC8D2989B81B4B65F5C4E84",
		w1200: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=674&amp;la=en&amp;mw=1200&amp;w=1200&amp;hash=5D285A06ED3282014D5B9C3178AAB3D1",
		w840: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=449&amp;la=en&amp;mw=800&amp;w=800&amp;hash=8E7A57681A0A90DAE3349D8D458E6885",
		w560: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=449&amp;la=en&amp;mw=800&amp;w=800&amp;hash=8E7A57681A0A90DAE3349D8D458E6885",
		w280: "https://www.metmuseum.org/-/media/cauliflower_roasted.jpg?h=449&amp;la=en&amp;mw=800&amp;w=800&amp;hash=8E7A57681A0A90DAE3349D8D458E6885"
	},
	audio: "https://www.metmuseum.org/-/media/audio/ipop-primer/doty_primercast.mp3?la=en",
	transcript: "[00:01:17] Až pomašírujem tøi sta mil za Prahu,\r\n" +
    "[00:01:24] tam spatøím, má milá, tureckou armádu."
}];

const example = exampleResponse[0];

const initializeAudioPlayers = () => {
	const audioPlayers = document.querySelectorAll(".js-marble-audio-player");
	audioPlayers.forEach((player) => new AudioPlayer({wrapperEl: player}));	
};

const defaultTrack = () => {
	return {
		id: 1,
		audio:	text("Audio File URL", "https://images.metmuseum.org/CRDImages/ad/audio/5TH-3865-ENG-134-1.mp3", "Track"),
		image: { ...greekHall1x1,
			w2400: greekHall1x1.srcSet.sizes["2440w"],
			w1600: greekHall1x1.srcSet.sizes["1920w"],
			w1200: greekHall1x1.srcSet.sizes["1240w"],
			w840: greekHall1x1.srcSet.sizes["1240w"],
			w560: greekHall1x1.srcSet.sizes["1240w"],
			w280: greekHall1x1.srcSet.sizes["1240w"]
		},
		description: text("Description", "Praise Songs about Javascript", "Track"),
		title: text("Title", "Track 1. Title", "Track"),
		transcript: text(
			"Transcript",
			exampleTranscriptData,
			"Track"
		)
	};
};

const track = (overrides={}) => {
	return {
		...defaultTrack(),
		...overrides,
	};
};

const exampleTranscriptData = `Figure, Abelam People
Sepik region, New Guinea (1981.415.1, 1978.412.871), Catalogue 27
(181 words)

NARRATOR: The carvings on this platform were created as part of the initiation rites of the Abelam people of New Guinea. 

Imagine this scene: a group of young men enter the dark interior of a ceremonial house, prepared to encounter powerful and sacred spirits of the forest. One by one, they crawl on their hands and knees between the legs of a carved statue, and emerge into a fire-lit chamber lined with elaborate sculptures, like the two you see here. The statues were once brilliantly painted. Curator Eric Kjellgren:

ERIC KJELLGREN: 15:41.This experience of emerging from the darkness into, essentially, the light and the color and the flickering light of the fire on the carvings themselves, 15:46 was intentionally designed to dazzle the initiates to essentially give them the experience of the divine through visual qualities alone. 

NARRATOR: For the Abelam, the paint was considered to be a magical substance that gave the carvings their supernatural power, and it was washed off after the rites were completed. 

Now, take a closer look at the figure on the left. To hear more about its imagery press play.

NOTE: This was getting too long, so I made a few deletions.

LEVEL 2 
 (187 words)

NARRATOR: At the very top of this sculpture, you see two birds' heads. They have the distinctive long beaks of hornbills.* The large face below them is shown as though it were an Abelam man in full ceremonial dress.* And below the large face is carved a smaller figure, dressed similarly, with a rounded body and its arms raised.*

ERIC KJELLGREN: Now although these images are in human form, they actually depict spirits which live out in the forests and these spirits are known as nggwalndu. These spirits are particularly associated with yams.

And the yam species that they had among the Abelam was actually a gigantic species. They could grow up to about twelve feet long and as thick around as a human leg. In fact, yams could grow almost as large as the wooden image we're looking at here now.

NARRATOR: Each prominent man had a ceremonial yam-exchange partner in a neighboring village. The men competed to see who could present the other with a larger yam. The exchange constituted a form of ritual warfare, dissipating social tension that might otherwise have erupted in the form of physical attack.

NOTE: Existing Stop 1715 now becomes a second level, with new narration

PARTIAL RE-DO
EXISTING STOP 1718 Figure, Kambot
Sepik Region, New Guinea (1978.412.823), Catalogue 52
246 words

NARRATOR-This impressive, life-size figure originally adorned a supporting post in a men's ceremonial house-among the Kambot people of New Guinea. Curator Eric Kjellgren:

ERIC KJELLGREN--Although it represents a remote ancestor, this image is actually decorated much like a Kambot man would be when wearing essentially his best ritual finery.  If you look around the neck of the image, you can see a series of crescents that go down the chest.  These are almost certainly images of pearl shells.

NARRATOR: One of the most unusual aspects of this figure is that his face can be interpreted as several distinct images. The elongated form of the head can be seen as the head of a crocodile*, or as a stylized human face.* The raised sections on the outside of the face represent two long narrow eyes, meeting at a long nose, which stretches down to a small, red mouth at the base of the face.*

If you look at the very top of the forehead, you see a circle with a red center.* This represents the head of a second figure. The long, curved eyes appear as arms, descending down on either side to two hands, which form the nostrils of the larger face.* Clasped in the hands, the nose of the first image here likely represents a flute. Such flutes were secret objects, known only to initiated men. This subtle reference almost certainly indicates that the statue contains further hidden imagery understood only by the initiated.

NOTE: Eric: it would be great to include the Sepik flute recordings you mentioned. How could we get them?`;

export { initializeAudioPlayers, track, example, exampleTranscriptData };
