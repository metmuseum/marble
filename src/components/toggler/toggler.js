export default function theToggler() {

    const togglers = document.querySelectorAll('.js-toggler');
    
    togglers.forEach((toggler) => {

		toggler.onclick = function(){
			toggler.parentNode.querySelector('.js-toggled-closed').classList.add('js-toggled-open');
		};
	});

}