const pokemon_container = document.querySelector('.pokemon-container');

const pokemones = async (id) => {
   try{ await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        card_pokemon(data);
    })
}catch(err){
    console.error(err);
} 
}

const listado_pokemones = (n) => {
    for(let i = 1; i <= n; i++){
        pokemones(i);
    }
}

const card_pokemon = (pokemon) => {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const image_container = document.createElement('div');
    image_container.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    image_container.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(image_container);
    card.appendChild(number);
    card.appendChild(name);

    pokemon_container.appendChild(card);
}

listado_pokemones(20);