import React from 'react'
import style from 'styled-components'
import PokeList from './PokeList'
import { useSelector } from 'react-redux'
const StylePokedex = style.div`
float:left;
background:#444;
color:white;
height:100vh;
width:100%;
margin:auto;
padding:10px;
    @media(min-width:576px){
         margin-left:30px;
         width:60%;
    }

`


export default function Pokedex() {
    const { pokemons_show = [], searchString = "" } = useSelector(state => state)

    return (
        <StylePokedex>
            {(searchString.length > 0 && pokemons_show.length === 0) ?
                (<h2>No hay Resultados para tu busqueda</h2>) :
                // (<PokeList2></PokeList2>)
                (<PokeList></PokeList>)

            }

        </StylePokedex>
    )
}
