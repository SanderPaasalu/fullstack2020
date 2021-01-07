import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


  

const App = () => {
const[num1, setNum1] = useState(5);
const[num2, setNum2] = useState(5);
const[num3, setNum3] = useState(5);
const Button = () => {
  return (
    <button onClick={() => setNum1(num1+1)}>+1</button>
  )
} 
const ButtonNeg = () => {
  return (
    <button onClick={() => setNum1(num1-1)}>-1</button>
  )
} 

const Button2 = () => {
  return (
    <button onClick={() => setNum2(num2+2)}>+2</button>
  )
}
const Button2Neg = () => {
  return (
    <button onClick={() => setNum2(num2-2)}>+2</button>
  )
}
const Button3 = () => {
  return (
    <button onClick={() => setNum3(num3+0.1)}>+0.1</button>
  )
}
const Button3Neg = () => {
  return (
    <button onClick={() => setNum3(num3-0.1)}>+0.1</button>
  )
}
return (
  <>
    <h1>Counter</h1>
    <h2>Step: 1</h2>
    <Button/>
    <p>{num1}</p>
    <ButtonNeg/>
    <h2>Step: 2</h2>
    <Button2/>
    <p>{num2}</p>
    <Button2Neg/>
    <h2>Step: 3</h2>
    <Button3/>
    <p>{num3}</p>
    <Button3Neg/>
  </>
)
}

ReactDOM.render(<App />, document.getElementById('root'));
