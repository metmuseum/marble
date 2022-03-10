import { html } from ".storybook/helpers";
import { withKnobs } from "@storybook/addon-knobs";
import lesMusettes from "./musette.js";
import { useEffect } from "@storybook/client-api";

export default { title: "Carousel/Musette", decorators: [withKnobs] };

const Musette = () => {
	useEffect(() => { lesMusettes(); });
	return html`
	<div class="la-musette la-musette-no-scrollbar js-la-musette">
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/771396">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/503578/1358034/main-image">
			</a>
			<h5>
				Musette de Cour
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/771396">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/771396/preview">
			</a>
			<h5>
				Reverse copy of The Companions of Ulysses arriving at Circe's dwelling
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/423644">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/232047/preview">
			</a>
			<h5>
				From a series of twenty-two plates
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/463973">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/497615/preview">
			</a> 
			<h5>
				Girodet and His Students
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/466311">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/207796/preview">
			</a>
			<h5>
				Relief of the Betrayal and Arrest of Jesus
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/337064">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/83962/preview">
			</a>
			<h5>
				Evening Dress
			</h5>
		</div>
		<div class="musette-fold">
			<a href="/art/collection/search/423658">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/700091/preview">
			</a>
			<h5>
				Column Statue of a King
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/423653">
				<img src=" https://collectionapi.metmuseum.org/api/collection/v1/iiif/423653/preview">
			</a>
			<h5>
				Vertical Panel with Design for a Mirror
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/337625">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/10150/preview">
			</a>
			<h5>
				Merced River, Yosemite Valley
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/334002">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/10152/preview">
			</a>
			<h5>
				Vertical Panel with a Pear Shaped Design
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/459090">
				<img src="https://images.metmuseum.org/CRDImages/ep/mobile-large/DP-16529-001.jpg">
			</a>
			<h5>
			Her Daughter, María Agustina
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/459090">
				<img src="https://images.metmuseum.org/CRDImages/ep/mobile-large/ep91.26.4.bw.R.jpg">
			</a>
			<h5>
				Suzanna and Her Elders
			</h5>
		</div>

		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/459090">
				<img src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/489972/preview">
			</a>
			<h5>
				Condesa de Altamira
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/459090">
				<img src="https://images.metmuseum.org/CRDImages/ep/mobile-large/DP143192.jpg">
			</a>
			<h5>
				A Banquet
			</h5>
		</div>
		<div class="musette-fold">
			<a href="http://www.metmuseum.org/art/collection/search/459090">
				<img src="https://images.metmuseum.org/CRDImages/ep/mobile-large/DP169398.jpg">
			</a>
			<h5>
				Elizabeth Cholmley (1769–1788)
			</h5>
		</div>
	</div>`;
};

export { Musette };