import React, { useEffect } from 'react'
import style from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, setPokemons } from '../actions'

const StylePokeList = style.div`
display:grid;
color:white;
height:100vh;
width:90%;
margin:auto;
    ul{
        display:grid;
        list-style-type: none;
        grid-auto-flow: dense;
        grid-template:  "1fr 1fr " 33.33vh
                        "1fr 1fr " 33.33vh
                        "1fr 1fr " 33.33vh;
        grid-gap: 2px;
        overflow:auto;
    }
    @media(min-width:576px){
        
        ul{
        grid-template:  "1fr 1fr 1fr " 33.33vh
                        "1fr 1fr 1fr " 33.33vh
                        "1fr 1fr 1fr " 33.33vh;
        grid-gap: 3px;
    }
    }

    
`


export default function PokeList() {
    const dispatch = useDispatch()


    let { pokemons, pokemons_show, searchString } = useSelector(state => state)
    if (searchString && pokemons_show) {
        pokemons = pokemons_show
    }
        
    
    useEffect(() => {
        let localPokemons = JSON.parse(localStorage.getItem("pokemons")) || []

        if (localPokemons.length === 0) {
            dispatch(getPokemons())
            console.log("Traer pokemons de la API")
        } else {
            dispatch(setPokemons(localPokemons))
            console.log("Traer pokemons del localStorage")
        }

    }, [dispatch])


    return (
        <StylePokeList>
            <ul>
                {pokemons &&
                    pokemons.map(pokemon =>
                        <li className="pokemon-container" key={pokemon.entry_number}>
                            <div>
                                <div className="container-bk">
                                    <a href={"/pokemon/" + pokemon.entry_number}>
                                        <img loading="lazy" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`} alt={pokemon.pokemon_species.name} />
                                    </a>
                                    <div className="poke-inf" >
                                        <h5>{pokemon.pokemon_species.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ).slice(0, 10)}
            </ul>
            <button>Cargar más</button>
        </StylePokeList>
    )
}
