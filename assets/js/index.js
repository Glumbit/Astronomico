const sign = document.querySelectorAll('.intro__item');
for (const key in sign) {
	if (Object.hasOwnProperty.call(sign, key)) {
		const signEl = sign[key];
		signEl.addEventListener('mouseover', () => {
			const selected = document.querySelector('.circle__select');
			selected.style.transform = `rotate(${signEl.getAttribute('Rotation')}deg)`;
			showZodiac(signEl)
		})
	}
}

function showZodiac(sign) {
	let mark = sign.getAttribute('SignName');
	const zodiac = document.querySelectorAll('.zodiac');
	for (const key in zodiac) {
		if (Object.hasOwnProperty.call(zodiac, key)) {
			const zodiacEl = zodiac[key];
			if (zodiacEl.getAttribute('SignMark') == mark) {
				const zodiacActive = document.querySelector('.zodiac--active');
				if (zodiacActive !== null) {
					zodiacActive.classList.remove('zodiac--active')
				}
				zodiacEl.classList.add('zodiac--active')
				break
			}
		}
	}
}