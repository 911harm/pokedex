import React from 'react'
import { useSelector } from 'react-redux'
import Search from '../Search';
import Filters from '../Filters';
import style from 'styled-components'
import Pokedex from '../Pokedex';

const StyleHead = style.div`
width:80%;
display:flex;
justify-content: space-between;
align-items: center;
margin:30px auto;
    .logo{
        width: 70px;
    }

@media(max-width:576px){
    margin:0;
        justify-content: space-evenly;
        input{
            width:75%;
        }
     a{
         width:25%;
        .logo{
            display:block;
            width:100%;
        }
    }
}

`

export default function Page() {
    const state = useSelector(state => state)
    return (
        <React.Fragment>
            <StyleHead>
                <a href="https://github.com/911harm"><img className="logo" src="https://www.freepngimg.com/thumb/github/1-2-github-free-png-image.png" alt="911harm" /></a>
                <Search>{state}</Search>
            </StyleHead>
            <hr />
            <Filters></Filters>
            <Pokedex></Pokedex>
        </React.Fragment>

    )
}
