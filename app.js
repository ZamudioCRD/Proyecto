const init = () => {
  alert('Bienvenido! Selecciona un Pokémon para obtener su información.');
  
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
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

        for (let i=0; i < personajes.length; i++) {

            contadorParaImagen + i;
            info += `
              <div class="tarjeta" onclick="fetchPokemonData('${personajes[i].url}')">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png" height="250" width="250">
                <p class="name">${personajes[i].name}</p>
              </div>
            `
          }   
        return section.innerHTML = info;
      })
  }
  
  document.onload = init();

    function fetchPokemonData(pokemon){
      let url = pokemon
      fetch(url)
      .then(response => response.json())
      .then(function(pokeData){
        console.log(pokeData)
        alert('ID del Pokémon: ' + pokeData.id +'\n'+ 'Nombre: ' + pokeData.name +'\n\n'+ 'Experiencia Base: ' + pokeData.base_experience + ' PX' +'\n'+ 'Peso: ' + pokeData.weight +' Lb' +'\n'+ 'Altura: ' + pokeData.height + ' ft')
      })
    }
