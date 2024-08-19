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
