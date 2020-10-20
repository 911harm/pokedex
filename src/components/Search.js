import React from 'react'
import style from 'styled-components'

const StyleSearch=style.input`
background:#444;
color:white;
height:20px;
width:30%;
margin:10px;
padding:10px;
border-rounded:10px;

`


export default function Search() {
    return (
        
        <StyleSearch placeholder="Pokemon">

        </StyleSearch>
    )
}
