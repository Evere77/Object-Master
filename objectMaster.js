// worked with Mann
const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

const pkmnIds = pokémon.map( p => p.id )

const pkmnIdDivBy3 = pokémon.filter(p => p.id % 3 ===0)
console.log(pkmnIdDivBy3);

const pkmnFireType = pokémon.filter(p => p.types.includes("fire"))
console.log(pkmnFireType);

const pkmnMoreTypes = pokémon.filter(p => p.types.length != 1)
console.log(pkmnMoreTypes);

const pkmnNames = pokémon.map(p => p.name);
console.log(pkmnNames);

const pkmnNameIdGreater99 = pokémon.filter(p => p.id > 99).map(p => p.name)
console.log(pkmnNameIdGreater99);

const pkmnPoisonType = pokémon.filter(p => p.types.length == 1 && p.types[0] == "poison").map(p => p.name)
console.log(pkmnPoisonType);

const pkmnSecondFlyingType = pokémon.filter(p => p.types[1] === "flying").map(p => p.types[0])
console.log(pkmnSecondFlyingType);

const pkmnNormalType = pokémon.filter(p => p.types.includes("normal"))
console.log(pkmnNormalType.length);