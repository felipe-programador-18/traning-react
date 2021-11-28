import React, {useState} from 'react'
import './style.css'
import VoltaR from './voltar'
import Parag from './Parag'
import Button from './Button'
import Callehelle from './called'

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




function App() {
  //try caught value in the onchange submenu 
   const [seleciona, setseleciona] = useState('')



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
    
  

  
  return (
    
    <div>

    <VoltaR volta={Numvolta} />
    <Parag text='voltas' />
    <Button text='+' onClick = {increment} />
    <Button text='-' onClick={decrement} /> 
    <br />
    <Button text='Iniciar' />
    <Button text='Reiniciar' /> 


    <Seeing paragrafo='thuoght about in that first of all' />
    <Seeing paragrafo='bidding your income' / >
    
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
  
    

    <input type='text'></input>

    </div>

    
  )

}


export default App

