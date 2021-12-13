/*
* Alumno: Saul Humberto Alamilla Calixto
* No. Control 18390023
* */
function loadCountryInfo(){
    const url = 'https://restcountries.com/v3.1/name/italy';
    fetch(url)
    .then(response => response.json())
    .then(data => {
    document.getElementById("info").innerHTML = `Nombre común: ${data[0].name.common}
													<br>Nombre oficial: ${data[0].name.official}
													<br>Moneda: ${data[0].currencies.EUR.name}
													<br>Simbolo de la modena: ${data[0].currencies.EUR.symbol}`;
    })
}
function loadCountryFlag(){
    const url = 'https://flagcdn.com/256x192/it.png';
    fetch(url)
    .then(response => response.blob())
    .then(imageBlob => {
    const imageObjectURL = URL.createObjectURL(imageBlob);
    const image = new Image();
    image.src = imageObjectURL

    document.getElementById("flag").appendChild(image);
    })
}
