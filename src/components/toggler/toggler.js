export default function theToggler() {

    const togglers = document.querySelectorAll('.js-toggler');
    
    togglers.forEach((toggler) => {

		toggler.onclick = function(){
            var toBeToggled = toggler.parentNode.querySelector('.js-togglee');
            if (toBeToggled.classList.contains('js-toggled-closed')) {
                toBeToggled.classList.remove('js-toggled-closed');
                toBeToggled.classList.add('js-toggled-open');
            } else {
                toBeToggled.classList.add('js-toggled-closed');
                toBeToggled.classList.remove('js-toggled-open');
            }
		};
	});
}