const consultarPokemon = (id,number) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

        .then(response => {
            return response.json()
        })

        .then(data => {
            pintarPokemon(data,number)
        }
        )

        .catch(error => {
            console.log(error)
        })

}
consultarPokemon(1,6)

const btnSeleccionar = () =>{
    let primerPokemon = Math.round(Math.random()*150)
    let segundoPokemon = Math.round(Math.random()*150)

    consultarPokemon(primerPokemon,1)
    consultarPokemon(segundoPokemon,2)
}
btnSeleccionar()

const listarPokemon = document.getElementById("listarpokemon")

const pintarPokemon = (data,id) =>{

    let item = listarPokemon.querySelector(`#pok-${id}`)

    item.getElementsByTagName("img")[0].setAttribute("src",
    data.sprites.front_default)

    item.getElementsByTagName("p")[0].innerHTML=data.name
}