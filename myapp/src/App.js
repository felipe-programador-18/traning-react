import React, {useState} from 'react'
import './style.css'
import VoltaR from './voltar'
import Parag from './Parag'
import Button from './Button'
import Callehelle from './called'
import Otheropt from './otheroption'
const Seeing = (props) =>{
  
  return (
    <p>
    {props.paragrafo}   <br />
  </p>
  )
}



const CallH2 =  (props) => {
  return (<h2>
    {props.paragrafo}
    </h2>)
    
  
}
const TestCont = (props) =>{
  return(
    <p>
    {props.cotagem}
    </p>
  )
}





//remember when i give an props i have remember of tag!!
const CaughtH2 = (props) => {
  return(
    <h3> {props.kinda}</h3>
  )
}

const ChangeTest = (props) =>{
  return(
    <p>{props.text}</p>
  )
}


//test to select opcoes of menu!!
const Optimore = (props) =>{
  return (
   
    <option>
    {props.more}
    </option>
  )
}


const Messagese = (props) => {
  return(
    <p>
    {props.message}
    </p>
  )
}


const AnotherPara = (props) =>{
  return (
    <p>
    {props.means}
    </p>
  )
}




function App() {

  //traning more and more this !!!  
  // try localstorage now!!!
  const [nome, setNome] = useState()

  const Armazena = (chave, valor) =>{
    localStorage.setItem(chave,valor)
  }
  
  const Consulta = (chave) =>{
    console.log(localStorage.getItem(chave))
  }
  
  const Deleted =(chave) => {
   localStorage.removeItem(chave)
  }
////////////////////////////////////////////////////


  //try caught value in the onchange submenu 
   const [seleciona, setseleciona] = useState('')

   // try another test about onclick
   const [adiciona, setadiciona] = useState('')


  // caught values of input with onchange!!
  const [value, setvalue] = useState('')

  const [name, setname] = useState('')

  const [Change, setchange] = useState('text here')

  const [Numvolta, setvolta] = useState(12)

  const [NumContagem, setContagem] = useState(0)

    const increment = ()=>{
      setvolta(Numvolta+1)
    }

    const decrement = () =>{
      setvolta(Numvolta-1)
    }

    const diminue = () =>{
      if(NumContagem>0){
        setContagem(NumContagem -1)
      }
    }
      
    const aumenta = () => {
      setContagem(NumContagem+1)
    }
 
   const mudanda = () => {
     setchange(Change +1)
   }
    

   const Together = () => {
     setadiciona(adiciona)
     localStorage.setItem(adiciona, adiciona+1)
     localStorage.getItem(adiciona, adiciona+1)

    }
  

  
  return (
    
    <div>

    <VoltaR volta={Numvolta} />
    <Parag text='voltas' />
    <Button text='+' onClick = {increment} />
    <Button text='-' onClick={decrement} /> 
    <br />
    <Button text='Iniciar' />
    <Button text='Reiniciar' /> 


    <Seeing paragrafo='thuoght about in that first of all more and insight about' />
    <Seeing paragrafo='bidding your income' / >
    
    <Seeing paragrafo='test more reasons for renting house for me!!' />
    <Button onClick={Callehelle} text='text of bottom!!'/>
    
    <Button onClick={Callehelle} text='text' />
    

    <CallH2 paragrafo='READ AND PRACTICE QUITE REACT!!!' />
    
    <TestCont cotagem= {NumContagem}/>
    <Button onClick={aumenta} text='adding' />
    <Button onClick={diminue} text ='split' />

   
    <CaughtH2 kinda=  'let do its in more one day search' />

    <ChangeTest onChange={mudanda}  text='vendo here' />
    <Button onClick={mudanda} text='testando' />

    <Button onClick={aumenta} text='reporting' />
    <Button onClick={diminue} text ='reading' />

   

    <input type='text' value={value} onChange={e => setvalue(e.target.value)} />
    <br></br>
    {value}

    <br></br>
    <input type='password' name={name} onChange = { e => setname(e.target.value)} />
    {name}





    <select seleciona={seleciona} onChange={e=> setseleciona(e.target.value)}>
    <Optimore  more='ferrari' />
    <Optimore more='lamburgini' />
    <Optimore more='renault' />
    
    </select>
    
    <Messagese  message={'you select brand :'+ seleciona} />
  
    

    <input type='text'  onChange = { e => setadiciona(e.target.value)}/>
    
    <Button text='click here' onClick={Together} />
    {adiciona}







   <label> Write one name</label>
   <input type='text'   value={nome}    onChange={(e)=> setNome(e.target.value)} /><br/>
   <button onClick={()=> Armazena('ls_name', nome)}>Armazena </button>
   <button  onClick={()=> Consulta('ls_name')}>Consulta </button>
   <button onClick={()=> Deleted('ls_name')}>Deleted</button> 




   <AnotherPara means= 'thuoght about that practice react quite for dont forgot' />
   <AnotherPara means= 'let me think, i think you can evolv more and more if ended net socias' />
 



   <select>
   <Otheropt earn ='Nike' />
   <Otheropt earn ='Adidas'/>
   <Otheropt earn= 'Puma'/>
   </select>

    </div>

    
  )

}


export default App

