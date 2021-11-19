import React, {useState} from 'react'


const Texth1 = (props) =>{
 return (
    <h1>
    {props.texto}
    </h1>
 )
}

const Parag = (props) => {
  return(
    <p>
     {props.p}
    </p>
    
  )
}
// remember i am passando referencia!!!

const Button = (props) => <button>{props.text}</button>


function App() {
  return (
    <div>
    <Texth1  texto='practice more react everyday always!!'/>
    <Parag p='more and more' />
    <Parag p='wants more teach react'/>
    <Texth1 texto= '110+10'/>
    <Parag p='finnaly react practice my day went weel!!' />
    <Button text='+' />
    <Button text='-' /> 
    <br />
    <Button text='Iniciar' />
    <Button text='Reiniciar' /> 
    </div>

    
  )

}


export default App

