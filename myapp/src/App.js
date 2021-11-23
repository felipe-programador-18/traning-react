import React, {useState} from 'react'
import './style.css'
import VoltaR from './voltar'
import Parag from './Parag'



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




// remember i am passando referencia!!!

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>


function App() {
  
  const [Numvolta, setvolta] = useState(12)


    const increment = ()=>{
      setvolta(Numvolta+1)
    }

    const decrement = () =>{
      setvolta(Numvolta-1)
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
    
    <Button onClick={Callehelle} text='alert'/>
    


    <CallH2 paragrafo='READ AND PRACTICE QUITE REACT!!!' />
  
    
    </div>

    
  )

}


export default App

