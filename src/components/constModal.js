import style from 'styled-components'
//Css of StyleModal

export const StyleModal = style.div`
box-sizing:border-box;
display:flex;
font-size:1.5rem;
align-items: center;
// background:#333;
// color:white;
// min-width:100%;
// height:60vh;
padding:20px;

  .Poke-img{
    padding:20px;
    width:70%;
    display:block;
    height:50%;
    
  }
  .Poke-info{
    margin:10px 20px;
    height:100%;
    padding:30px;
    width:100%;
    padding:5px;
      h3{
        text-align:center;
      }
      table{
        width: 100%;
      }
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 0 20px;
      }
    
      tr:nth-child(even) {
        background-color: #dddddd;
      }
    
  }
  #btn-back{
    padding:10px;

  }
`
//for Modal Config
export const customStyles = {
    content: {
      width: '80%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };