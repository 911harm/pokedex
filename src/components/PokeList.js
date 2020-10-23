import React, { useEffect, useState } from 'react'
import style from 'styled-components'
// import axios from 'axios'
import Global from '../Global'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons, setPokemons } from '../actions'
import Modal from 'react-modal';
import { capitalizeFirstLetter } from '../pipes'
import { StyleModal, customStyles } from './constModal'

//style component
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
//Add modal
Modal.setAppElement('#root')

const { url } = Global
//.....................
//.................
//.........
export default function PokeList() {
  const dispatch = useDispatch()
  const [ChargeN, setChargeN] = useState(20)
  const [showButtom, setShowButtom] = useState(true)
  let { pokemons, pokemons_show, searchString } = useSelector(state => state)


  //Modal const
  const [Pokes2, setPokes2] = React.useState([]);
  const [Pokes, setPokes] = React.useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  //Modal funtions
  function openModal(id) {
    fetch(url + "pokemon/" + id)
      .then(res => res.json())
      .then(data => setPokes(data))

    fetch(url + "pokemon-species/" + id)
      .then(res => res.json())
      .then(data => setPokes2(data))

    setIsOpen(true);

  }

  function closeModal() {
    setIsOpen(false);
  }

  //if Search
  if (searchString && pokemons_show) {
    pokemons = pokemons_show
  }
  //..

  useEffect(() => {
    let localPokemons = JSON.parse(localStorage.getItem("pokemons")) || []

    if (localPokemons.length === 0) {
      dispatch(getPokemons())
      setShowButtom(true)
      // console.log("Traer pokemons de la API")
    } else {
      dispatch(setPokemons(localPokemons))
      setShowButtom(true)
      // console.log("Traer pokemons del localStorage")
    }
  }, [dispatch])

  //..
  const chargeMore = function () {
    setChargeN(ChargeN + 20)
    if (pokemons.length < 20) {
      setShowButtom(false)
    }
  }
  //..
  return (
    <StylePokeList>
      <ul>
        {pokemons &&
          pokemons.map(pokemon =>
            <li className="pokemon-container" key={pokemon.entry_number}>
              <div>
                <div className="container-bk">
                  <a href={"#" + pokemon.entry_number} onClick={() => openModal(pokemon.entry_number)}>
                    <img loading="lazy" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`} alt={pokemon.pokemon_species.name} />
                  </a>
                  <div className="poke-inf" >
                    <h5>{capitalizeFirstLetter(pokemon.pokemon_species.name)}</h5>
                  </div>
                </div>
              </div>
            </li>
          ).slice(0, ChargeN)}
      </ul>
      {showButtom
        ? <button onClick={chargeMore}>Load more...</button>
        : <p>No more Pokemons</p>
      }
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >

        <StyleModal>
          {Pokes.name
            ? <img className="Poke-img" src={Pokes.sprites.front_default} alt={Pokes.name} />
            : <p>Loading...</p>
          }
          {Pokes2.name &&
            <div className="Poke-info">

              <h3>{capitalizeFirstLetter(Pokes.name)}  ({Pokes.id}) </h3>
              {Pokes2.flavor_text_entries[106]
                ? <p>{Pokes2.flavor_text_entries[106].flavor_text}</p>
                : <p>{Pokes2.flavor_text_entries[34].flavor_text}</p>}
              <table>
                <tbody>
                  <tr>
                    <th>Height</th>
                    <td>{Pokes.height / 10} m</td>
                  </tr>
                  <tr>
                    <th>Weight</th>
                    <td>{Pokes.weight / 10} Kg</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>{Pokes.types.map(t => t.type.name + " ")}</td>
                    {/* <td>{Pokes.types[0].type.name}</td> */}
                  </tr>
                   
                  {/* <tr>
                    <th>Gender</th>
                    <td>{Pokes.height}</td> 
                  </tr> */}
                  <tr>
                    <th>Habitat</th>
                    <td>{Pokes2.habitat.name}</td>
                  </tr>
                  <tr>
                    <th>Color</th>
                    <td>{Pokes2.color.name}</td>
                  </tr>

                </tbody>
              </table>
            </div>}

        </StyleModal>
        <button style={{ padding: "8px" }} id="btn-back" onClick={closeModal}>Back</button>

      </Modal>
    </StylePokeList>
  )
}
