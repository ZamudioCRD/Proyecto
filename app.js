const init = () => {

    fetch("https://digimon-api.herokuapp.com/api/digimon")
    .then((respuesta) => {
        return respuesta.json();
    })

    .then((datos) => {
        const personajes = datos.results;
        const section = document.querySelector('section');
        let info = '';

        for (let i = 0; i < Array.length; index++) {
            console.log(personajes[i].name);
            listaNombres += `
                <div>
                    <p>Name: ${personajes[i].name}</p>
                    <p>Gender: ${personajes[i].gender}</p>
                    <p>Origen: ${personajes[i].origen}</p>
                    <hr>
                <div>
            `
        }
    })
}

document.onload = init();