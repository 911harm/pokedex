import React from 'react'
import style from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

const StyleSearch = style.input`
background:#444;
color:white;
height:20px;
width:30%;
margin:10px;
padding:10px;
border-rounded:10px;

`


export default function Search() {
    const { pokemons } = useSelector(state => state)
    const dispath = useDispatch();
    const setSearch = (e) => {
        let searchString = e.target.value
        if (parseInt(searchString)) {
            let filtrado = pokemons.filter(a => a.entry_number.toString().includes(parseInt(searchString)))
            dispath({ type: "SET_SEARCH_BY_TEXT", searchString, payload: filtrado })
        } else {
            let filtrado = pokemons.filter(a => a.pokemon_species.name.toLowerCase().includes(searchString.toLowerCase()))
            dispath({ type: "SET_SEARCH_BY_TEXT", searchString, payload: filtrado })
        }
    }
    return (

        <StyleSearch placeholder="Pokemon ID or Name" onChange={setSearch}>

        </StyleSearch>
    )
}
