const init = () => {
  
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        console.log('DATOS', datos)
        const personajes = datos.results;
        console.log(personajes)
        const section = document.querySelector('section');
        let info = '';
        let contadorParaImagen = 0;
  
        for (let i = 0; i < personajes.length; i++) {
            contadorParaImagen + i;
            info += `
              <div class="tarjeta">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png" height="200" width="200">
                <p class="name">${personajes[i].name}</p>
                <a href="${personajes[i].url}">Mas info.</a>
              </div>
            `
        }   
        return section.innerHTML = info;
      })
  }
  
  document.onload = init();
