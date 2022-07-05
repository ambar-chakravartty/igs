const navbar = document.querySelector('.nav-links');
const toggle = document.getElementById('mob-button');

toggle.addEventListener('click' ,() => {
	const v = navbar.getAttribute('data-visible');
	
	if (v === "false") {
		navbar.setAttribute('data-visible',true)
		toggle.setAttribute('aria-expanded',true)
	}else if (v === "true"){
		navbar.setAttribute('data-visible',false)
		toggle.setAttribute('aria-expanded',false)
	}

	});