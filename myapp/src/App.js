import React, {useState} from 'react'
import './style.css'
import VoltaR from './voltar'
import Parag from './Parag'
import Button from './Button'

const Seeing = (props) =>{
  
  return (
    <p>
    {props.paragrafo}   <br />
  </p>
  )
}

const Callehelle = () =>{
  return (
   alert('teste dom!!')
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



function App() {
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

    </div>

    
  )

}


export default App

