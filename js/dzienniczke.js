let dzienniczke = document.querySelector('.dzienniczke');

for(let x=0; x<24; x++){
	let godzinka = document.createElement('div');
	godzinka.innerHTML = "<p class='godzina'>" + (x+1) + ":00</p><p class='opis'>Co robiłeś back then?</p>";
	godzinka.setAttribute('class', 'godzinka');
	dzienniczke.appendChild(godzinka);
}