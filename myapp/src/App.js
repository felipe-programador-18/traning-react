import React, {useState} from 'react'



const VoltaR = (props) => {
  return (
    <p>{props.volta}</p>
  )
}




const Parag = (props) => {
  return(
    <p>
     {props.p}  <br/>
     voltas
     
    </p>
  )
}

const Seeing = (props) =>{
  
  return (
    <p>
    {props.paragrafo}   <br />
  </p>
  )
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
    
    </div>

    
  )

}


export default App

