
const POKEMON_API = "https://pokeapi.co/api/v2/";

// getPokemonList -> Get the first 1000 pokemon 
export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=1000&offset=0");
    const data = await response.json();
    return data.results;
}

// getPokemon -> given a string "pikachu", get the information of pikachu
export async function getPokemon(name: string) {

    const response = await fetch(POKEMON_API + "pokemon/" + name);
    const data = await response.json();
    return data;
}
