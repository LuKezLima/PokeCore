const getPokemon = async (name) => {
    let pokemonData = '';
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
        pokemonData = data;
    }).catch((error) => {
        alert('Não encontrado')
    })


    const skills = pokemonData.moves.slice(0, 80)

    const layout = `
<div class="resultContainer" id='resultId'>
<div class="pokeImage">
    <img src="https://img.pokemondb.net/artwork/large/${pokemonData.name}.jpg" alt="imagem do ${name}">
    <h3>${pokemonData.name}</h3>
    <p>nr. ${pokemonData.id}</p>
</div>

<div class="pokeInfo">
    <h3>Tipo: ${pokemonData.types[0].type.name}</h3>
    <div class="weightTall">
        <h3>Altura:  ${pokemonData.height / 10} M</h3>
        <h3>Peso: ${pokemonData.weight / 10} KG</h3>
    </div>
    <hr>
    <div class="habilidades">
        <p><strong>Habilidades:</strong> ${skills.map(
            (skill) => skill.move.name
          )} </h2> </p>
    </div>
</div>
</div>
`

const main = document.getElementById('main')
main.insertAdjacentHTML( "beforeEnd",layout)
}


const btnSearch = document.getElementById('btnSearch')

btnSearch.addEventListener('click', (e) => {
    const input = document.getElementById('input')
    e.preventDefault()
    if(document.getElementById('resultId')){
        document.getElementById('main').removeChild(document.getElementById('main').lastElementChild)
    }

    if(input.value === ''){
        alert('Campo vazio!')
    } else{
        getPokemon(input.value)
    }
   
})


