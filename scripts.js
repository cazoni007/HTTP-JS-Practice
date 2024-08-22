/*
//Clases en JS
class persona {
    constructor(nombre, apellido, edad) {
        this.name = nombre;
        this.lastname = apellido;
        this.age = edad;
    }
    presentacion() {
        return `Hola me llamo ${this.name}`
    }
}

class estudiante extends persona {
    constructor(nombre, apellido, curso){
        super(nombre,apellido);
        this.course = curso;
    }
    presentacion() {
        return `Hola, soy ${this.name} y soy del curso ${this.course}`
    }
}

const estudiante1 = new estudiante("Juan", "Adolfo", "4to B Sec.");

estudiante.prototype.nuevometodo = function() {
    console.log(`Hola, soy un nuevo metodo, el nombre del estudiante es ${this.name}`);
};

//Promesas en JS
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;
        if(!operationSuccessful) {
            resolve("La operacion fue un exito!");
        } else {
            reject("La operacion fallo!");
        }
    }, 2000);    
});
promesa.then((successMessage) => console.log(successMessage))
    .catch((rejectedMessage => console.log(rejectedMessage)));

function prueba() {
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => console.log(response.json()))
            .catch(error => console.log(error))
}

//ASYNC y AWAIT
async function datosApi(){
    try {
        let datosPoke = await fetch("https://rickandmortyapi.com/api/character");
        let datos = datosPoke.json();
        console.log(datos);
    } catch(error){
        console.log(`Ocurrio un error... ${error}`);
    }
}

//FOR AWAIT OF
async function infoRick(){
    try{
        const arrayUrls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/location", "https://rickandmortyapi.com/api/episode"]
        for await (var element of arrayUrls) {
            console.log((await fetch(element)).json())
        }
    } catch(error) {
        console.log(error);
    }
}
*/
const inputText = document.querySelector('#titleText');
const inputContent = document.querySelector('#contentText');
const mainElement = document.querySelector('main');
const section = document.createElement('section');
section.classList.add('contentSection');
mainElement.append(section);

const postButton = document.querySelector('#postButton');
postButton.addEventListener('click', postContentPro);

const getButton = document.querySelector('#getButton');
getButton.addEventListener('click', GetContent)

function FetchContent(url, method, data) {
        return fetch(url, {
               method: method,
               body: JSON.stringify(data),
               headers: {"conent-type": "application/json"},
    }).then(response => {return response.json()})
}

async function GetContent() {
    try {
        // Realiza una solicitud fetch a la URL y espera la respuesta, luego convierte la respuesta a JSON
        const infoFetch = await FetchContent("https://jsonplaceholder.typicode.com/posts", "GET");

        // Itera sobre cada elemento en la respuesta JSON
        for await (const element of infoFetch) {  
            // Crea un nuevo elemento <article>
            const article = document.createElement('article');

            // Crea un nuevo elemento <p> para el título y le añade una clase y el texto del título
            const bodyTitle = document.createElement('p');
            bodyTitle.classList.add('bodyTitle');
            bodyTitle.innerText = element.title;
            article.append(bodyTitle); // Añade el título al artículo
            
            // Crea un nuevo elemento <p> para el cuerpo y le añade una clase y el texto del cuerpo
            const bodyFetch = document.createElement('p');
            bodyFetch.classList.add('bodyFetch');
            bodyFetch.innerText = element.body;
            article.append(bodyFetch); // Añade el cuerpo al artículo

            // Crea un nuevo botón para eliminar el contenido y le añade una clase y el texto del botón
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteButton');
            deleteButton.textContent = "Delete Content";
            article.append(deleteButton); // Añade el botón al artículo

            // Añade el artículo completo a la sección del documento
            section.append(article);
        }
    } catch (error) {
        // Si ocurre un error, lo muestra en la consola
        console.log(error);
    }
}

async function postContent(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId,
    }
    FetchContent("https://jsonplaceholder.typicode.com/posts", "POST", post);
}

function postContentPro() {
    const title = inputText.value;
    const content = inputContent.value;
    postContent(title,content);
}