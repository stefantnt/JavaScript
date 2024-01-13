

function infaltioCalculator() {
	let inflationRate = document.querySelector('#inflationRate');
	let money = document.querySelector('#money');

//parseFloat sluzi u pretvaranje stringa u decimalan broj
	
	inflationRate = parseFloat(inflationRate.value);
	money = parseFloat(money.value);

	let year = document.querySelector('#year');
	year = parseFloat(year.value);



//formula za izracunavanje INFLACIJE za prvu godinu

	let worth = money + (money * (inflationRate / 100));

//formula za izracunavanje inflacije za ostale godine	

	for (let i = 1; i < year; i++) {
		worth += worth * (inflationRate / 100);
	}

	let newElement = document.createElement('div');
	newElement.className = 'new-value';
	newElement.innerText =`Danasnjih ${money} eura vredi isto kao 
	${worth} eura za ${year} godina.`;

	document.querySelector('.container').appendChild(newElement);
	
}