/*Aprendiendo DOM
Para poder modificar los elementos html con js debemos llamarlos mediante clases, id o por las etiquetas de los mismas*/
//GetElementByID
console.log(`GetElementByID`)
const titulo = document.getElementById("title");
const titulo_2 = document.getElementById("title_Two");
console.log(`El titulo es: ${titulo.innerText}`);
console.log(`El titulo 2 es: ${titulo_2.textContent}`);
//GetElementByTagName
console.log(`GetElementByTagName`)
const titulo_3 = document.getElementById("title_three");
console.log(`El titulo 3 es: ${titulo_3.innerText}`);
const metodotag = document.getElementsByTagName('section');
console.log(`Numero de tag:${metodotag.length}`)
for (let i = 0; i < metodotag.length; i++) {
    console.log(`${metodotag[i].innerText}`);
    if (i = metodotag.length)
        console.log('Final de la busqueda')
}
//GetElementByClassName
console.log(`GetElementByClassName`)
const elements = document.getElementsByClassName('hello');
for (let element of elements) {
    console.log(element.innerText)
}
//QuerrySelectorAll
console.log(`QuerrySelectorAll`)
const select = document.querySelectorAll('p.hello');
for (let element of select) {
    console.log(element.innerText)
}
/************FORMULARIO**************/
function mostrarValores() {
    let formulario = document.forms['Form'];
    let text;
    let name = formulario['name'];
    let lastName = formulario['lastName'];
    let address = formulario['address'];
    let email = formulario['email'];
    let date = formulario['date'];
    text = `Hola ${name.value} ${lastName.value} :D <br>
    Direccion: ${address.value} <br>
    Email: ${email.value} <br>
    Fecha: ${date.value}
    `;
    let message = document.getElementById('saludo');
    if (name.value != '' && lastName.value != '' && address.value != '' && email.value != '' && date.value != '') {
        document.getElementById('saludo').innerHTML = text.toUpperCase();
        message.style =  `
        visibility: visible;
        padding: 8.1% 17.8%
        `
    } else {
        document.getElementById('saludo').innerHTML = 'FAVOR RELLENAR TODOS LOS CAMPOS';
        message.style = `
        visibility: visible;
        `
    }
}
function touch() {
    document.getElementById('saludo').style = 'visibility: hidden;';
}