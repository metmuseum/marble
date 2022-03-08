import { html } from ".storybook/helpers";

import { withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Musette", decorators: [withKnobs] };

const Musette = () => {
	return html`
	<div class="la-musette js-la-musette">
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/771396">
				<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/503578/1358034/main-image" alt="La Musette">
			</a>
			<h5 class="article-card__header-heading">
				Musette de Cour
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/771396">
				<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/771396/preview" alt="Girodet and His Students">
			</a>
			<h5 class="article-card__header-heading">
				Reverse copy of The Companions of Ulysses arriving at Circe's dwelling, from a series of twenty-two plates depicting mythological subjects, plate 21
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org" /art/collection/search/423644">
				<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/232047/preview" alt="Vertical Panel with Design for a Mirror">
			</a>
			<h5 class="article-card__header-heading">
				Reverse copy of The Companions of Ulysses arriving at Circe's dwelling, from a series of twenty-two plates depicting mythological subjects, plate 21
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/463973">
				<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/497615/preview" alt="Relief of the Betrayal and Arrest of Jesus">
			</a> 
			<h5 class="article-card__header-heading">
				Reverse copy of The Companions of Ulysses arriving at Circe's dwelling, from a series of twenty-two plates depicting mythological subjects, plate 21
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/466311">
				<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/207796/preview" alt="Column Statue of a King">
			</a>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/337064">
				<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/83962/preview" alt="Woman Bathing (La Toilette)">
			</a>
			<h5 class="article-card__header-heading">
				Evening Dress
			</h5>
		</div>
		<div class="musette-fold">
			<a href="/art/collection/search/423658">
				<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/700091/preview" alt="The Annunciation to the Shepherds">
			</a>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/423653">
				<img class="musette-fold" src=" https://collectionapi.metmuseum.org/api/collection/v1/iiif/423653/preview " alt="Vertical Panel with a Pear Shaped Design with a Mounted Soldier and Centaurs">
			</a>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/337625">
				<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/10150/preview" alt="Merced River, Yosemite Valley">
			</a>
			<h5 class="article-card__header-heading">
				Merced River, Yosemite Valley
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/334002">
				<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/10152/preview" alt="Seated Giant">
			</a>
		</div>
		<div class="musette-fold"><a href="http://www.metmuseum.org/art/collection/search/459090">
			<img class="musette-fold" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/489972/preview" alt="Condesa de Altamira and Her Daughter, María Agustina">
		</a>
		</div>
	</div>`;
};

export { Musette };