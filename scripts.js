const inputText = document.querySelector('#titleText');
const inputContent = document.querySelector('#contentText');
const mainElement = document.querySelector('main');
const section = document.createElement('section');
section.classList.add('contentSection');
mainElement.append(section);

const postButton = document.querySelector('#postButton');
postButton.addEventListener('click', postContent);

const getButton = document.querySelector('#getButton');
getButton.addEventListener('click', GetContent)

function FetchContent(url, method, data) {
        return fetch(url, {
               method: method,
               body: JSON.stringify(data),
               headers: {"content-type": "application/json"},
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
            
            // Crea un nuevo elemento <p> para el cuerpo y le añade una clase y el texto del cuerpo
            const bodyFetch = document.createElement('p');
            bodyFetch.classList.add('bodyFetch');
            bodyFetch.innerText = element.body;

            // Crea un nuevo botón para eliminar el contenido y le añade una clase y el texto del botón
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('deleteButton');
            deleteButton.textContent = "Delete Content";

            //Agrega el Id del post a la etiqueta article que contiene dicho post
            article.id = element.id;
            // Añade el artículo completo a la sección del documento
            article.append(bodyTitle, bodyFetch, deleteButton);
            section.append(article);
        }
    } catch (error) {
        // Si ocurre un error, lo muestra en la consola
        console.log(error);
    }
}

async function postContent() {
    try {
        const userId = Math.random();
        const post = {
            title: inputText.value,
            body: inputContent.value,
            userId: userId,
        };
        await FetchContent("https://jsonplaceholder.typicode.com/posts", "POST", post);
    } catch (error) {
        console.log(error);
    }
}

section.addEventListener('click', function(event){
    if(event.target.tagName === "BUTTON"){
        const postId = event.target.closest("article").id;
        FetchContent(`https://jsonplaceholder.typicode.com/posts/${postId}`, "DELETE")
        console.log(`El post ${postId} ha sido eliminado`)
    }
})