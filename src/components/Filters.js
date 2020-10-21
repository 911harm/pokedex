import React, { useEffect } from 'react'
import style from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getFilters } from '../actions'

const StyleFilters = style.div`
display:none;
float:left;
background:#444;
color:white;
height:100%;
width:25%;
margin:10px;
padding:30px;
    .check{
        display:inline-block;
        margin:5px;
        font-size:1.2rem;
    }
    .gender{
        font-size:1.2rem;
        height:2rem;
    }
    @media(min-width:576px){
        display:block;
    }

`


export default function Filters() {
    const dispatch = useDispatch()
    const { types, colors, genders } = useSelector(state => state)
    useEffect(() => {
        dispatch(getFilters())
    }, [dispatch])
    return (

        <StyleFilters placeholder="Pokemon">
            <div>
                <h2>Type</h2>
                {types &&
                    types.map(type => {
                        return (
                            <div className="check" key={type.name}>
                                <label htmlFor={type.name}>{type.name}</label>
                                <input type="checkbox" name={type.name} />
                            </div>
                        )
                    }

                    )
                }
                <hr />
                <h2>Color:</h2>
                {colors &&
                    colors.map(type => {
                        return (
                            <div className="check" key={type.name}>
                                <label htmlFor={type.name}>{type.name}</label>
                                <input type="checkbox" name={type.name} />
                            </div>
                        )
                    }

                    )
                }
                <hr />
                <h2>Gender:</h2>
                {genders &&
                    genders.map(gender => {
                        return (
                            <div className="gender" key={gender.name}>
                                <input type="radio" id='gender' name='gender' value={gender.name}/>
                                <label htmlFor='gender'>{gender.name}</label>
                            </div>
                        )
                    }

                    )
                }
            </div>
        </StyleFilters>
                        )
                    }
