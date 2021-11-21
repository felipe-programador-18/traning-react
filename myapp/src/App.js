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
// remember i am passando referencia!!!

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

function App() {
  
  const [Numvolta, setvolta] = useState(12)


    const increment = ()=>{
      setvolta(Numvolta+1)
    }
  
  
  return (
    
    <div>

    <VoltaR volta={Numvolta} />
    <Parag text='voltas' />
    <Button text='+' onClick = {increment} />
    <Button text='-' /> 
    <br />
    <Button text='Iniciar' />
    <Button text='Reiniciar' /> 
    </div>

    
  )

}


export default App

