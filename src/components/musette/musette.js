export default function lesMusettes() {
	const lesMusettes = document.querySelectorAll('.js-la-musette');

	lesMusettes.forEach((laMusette) => {
		const preventClick = (e) => {
			e.preventDefault();
			e.stopImmediatePropagation();
		}
		let mouseIsDown = false;
		var mouseIsBeingDragged = false;
		let startPositionX;
		let scrollLeft;

		// create wrapper
		var wrapMusette = document.createElement('div');
		wrapMusette.classList.add('musette-wrapper');

		// create buttons
		var leftButton = document.createElement('button');
		leftButton.classList.add('musette-move-left');
		var rightButton = document.createElement('button');
		rightButton.classList.add('musette-move-right');

		// insert wrapper before musette
		laMusette.parentNode.insertBefore(wrapMusette, laMusette);

		// put elements into wrapper
		wrapMusette.appendChild(laMusette);
		wrapMusette.appendChild(leftButton);
		wrapMusette.appendChild(rightButton);

		// get dimensions, used exclusively for buttons
		// imported from old Madaveousel and maybe more specs than we need
		const getMusetteSpecs = (laMusette) => {
			var wiewportWidth = laMusette.offsetWidth;
			var trackWidth =  laMusette.scrollWidth;
			var positionLeft = laMusette.scrollLeft;
			var remainingRight = trackWidth - (positionLeft + wiewportWidth);
			var moreLeft = (positionLeft > 0) ? true : false;
			var moreRight = (remainingRight > 0) ? true : false;
	
			var specs = {
				viewportWidth: wiewportWidth,
				trackWidth:  trackWidth,
				positionLeft: positionLeft,
				remainingRight: remainingRight,
				moreLeft: moreLeft,
				moreRight: moreRight
			}
			return specs;
		};

		// should buttons be hidden?
		const checkButtonStatus = (laMusette) => {
			var thisMusette = getMusetteSpecs(laMusette);
			if (thisMusette.moreLeft) {
				wrapMusette.classList.add('musette-has-left-button');
			} else {
				wrapMusette.classList.remove('musette-has-left-button');
			}
			if (thisMusette.moreRight) {
				wrapMusette.classList.add('musette-has-right-button');
			} else {
				wrapMusette.classList.remove('musette-has-right-button');
			}
		}
		checkButtonStatus(laMusette);

		const buttonScrollRight = (laMusette) => {
			var thisMusette = getMusetteSpecs(laMusette);
			var scrollToPosition = thisMusette.positionLeft + thisMusette.viewportWidth;
			laMusette.scrollTo({left: scrollToPosition, behavior: 'smooth'});
			checkButtonStatus(laMusette);
		};

		const buttonScrollLeft = (laMusette) => {
			var thisMusette = getMusetteSpecs(laMusette);
			var scrollToPosition = thisMusette.positionLeft - thisMusette.viewportWidth;
			laMusette.scrollTo({left: scrollToPosition, behavior: 'smooth'});
			checkButtonStatus(laMusette);
		};

		// listen for scroll, so we can check for buttons when it's finished
		var isScrollingNow;
    
		laMusette.addEventListener('scroll', () => {
			// Clear timeout throughout the scroll
			window.clearTimeout(isScrollingNow);
			// Set a timeout to run after scrolling ends
			isScrollingNow = setTimeout(function() {
				// Run the callback
				checkButtonStatus(laMusette);
			}, 66);
		}, false);

		// button control
		leftButton.addEventListener('click', (e) => {
			e.preventDefault();
			buttonScrollLeft(laMusette);
		});

		rightButton.addEventListener('click', (e) => {
			e.preventDefault();
			buttonScrollRight(laMusette);
		});
		
		// musette grabbing and dragging controls
		laMusette.addEventListener('mousedown', (e) => {
			e.preventDefault();
			mouseIsDown = true;
			startPositionX = e.pageX - laMusette.offsetLeft;
			scrollLeft = laMusette.scrollLeft;
		});
		
		laMusette.addEventListener('mouseleave', () => {
			mouseIsDown = false;
		});
		
		laMusette.addEventListener('mouseup', (e) => {
			const musettteLinks = laMusette.querySelectorAll('a');
			if(mouseIsBeingDragged){
				for(let i = 0; i<musettteLinks.length; i++) {
					musettteLinks[i].addEventListener("click", preventClick);
				}
			} else{
				for(let i = 0; i<musettteLinks.length; i++) {
					musettteLinks[i].removeEventListener("click", preventClick);
				}
			}
			mouseIsDown = false;
			mouseIsBeingDragged = false;
		});
		
		laMusette.addEventListener('mousemove', (e) => {
			if(!mouseIsDown) return;
			mouseIsBeingDragged =  true;
			e.preventDefault();
			const x = e.pageX - laMusette.offsetLeft;
			const walk = (x - startPositionX) * 2; //scroll-fast
			laMusette.scrollLeft = scrollLeft - walk;
		});
	});
}