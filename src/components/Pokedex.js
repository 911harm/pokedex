import React from 'react'
import style from 'styled-components'
import PokeList from './PokeList'

const StylePokedex=style.div`
float:left;
background:#444;
color:white;
height:100vh;
width:60%;
margin-left:30px;
// padding:10px;

`


export default function Pokedex() {
    return (
        <StylePokedex>
            <PokeList></PokeList>
        </StylePokedex>
    )
}
