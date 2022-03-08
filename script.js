const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const image = document.querySelector("#poke_img");
const btn = document.querySelector("#btn");

const typeColor = {
    normal: "#EAD2AC",
    fire: "#FF6D00",
    water: "#0AC2FF",
    grass: "#7AC74C",
    electric: "#FFF947",
    ice: "#B8F1EF",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#61AF5A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#3E0C83",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#FFAFCC"
};

const typeColorA = {
    normal: "rgba(234, 210, 172, 0.6)",
    fire: "rgba(255, 109, 0, 0.6)",
    water: "rgba(10, 194, 255, 0.6)",
    grass: "rgba(122, 199, 76, 0.6)",
    electric: "rgba(255, 249, 71, 0.6)",
    ice: "rgba(189, 224, 254, 0.6)",
    fighting: "rgba(194, 46, 40, 0.6)",
    poison: "rgba(163, 62, 161, 0.6)",
    ground: "rgba(226, 191, 101, 0.6)",
    flying: "rgba(92, 154, 255, 0.6)",
    psychic: "rgba(249, 85, 135, 0.6)",
    bug: "rgba(136, 195, 131, 0.6)",
    rock: "rgba(182, 161, 54, 0.6)",
    ghost: "rgba(115, 87, 151, 0.6)",
    dragon: "rgba(62, 12, 131, 0.6)",
    dark: "rgba(112, 87, 70, 0.6)",
    steel: "rgba(183, 183, 206, 0.6)",
    fairy: "rgba(255, 175, 204, 0.6)"
};




let getPokemonData = () => {
    let num = Math.floor(Math.random() * 150) + 1;
    const finalURL = baseURL + num;

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data);
        });
}

let generateCard = (data) => {
    document.querySelector("#name").innerHTML = data.name[0].toUpperCase() + data.name.slice(1);
    document.querySelector("#number").innerHTML = `#${data.id}`;
    document.querySelector("img").src = data.sprites.other.dream_world.front_default;
    document.querySelector("#type").innerHTML = data.types[0].type.name.substring(0,1).toUpperCase() + data.types[0].type.name.slice(1);
    document.querySelector("#type").style.backgroundColor = typeColor[data.types[0].type.name];
    document.querySelector("#card").style.backgroundColor = typeColorA[data.types[0].type.name];

    document.querySelector("#move_set1").innerHTML = (`${data.moves[0].move.name.substring(0,1).toUpperCase() + data.moves[0].move.name.slice(1)}`);
    document.querySelector("#move_set2").innerHTML = (`${data.moves[1].move.name.substring(0,1).toUpperCase() + data.moves[1].move.name.slice(1)}`);

    console.log(data.name[0].toUpperCase() + data.name.slice(1));
    console.log(`${data.moves[0].move.name}, ${data.moves[1].move.name}, ${data.moves[2].move.name}, ${data.moves[3].move.name}`);
}


btn.addEventListener("click", getPokemonData)
