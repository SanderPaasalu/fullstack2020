import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const statistics = (good, neutral, bad) => {
  if (good>=1 || neutral>=1 || bad>=1)
    return (
      <div>
        <th><h1>Statistics</h1></th>
        <tr><p>Good {good}</p></tr>
        <tr><p>Neutral {neutral}</p></tr>
        <tr><p>Bad {bad}</p></tr>  
        <tr><p>All {good+neutral+bad}</p></tr>  
        <tr><p>Average {(good*1-bad*1+neutral*0)/2}</p></tr>  
        <tr><p>Positive {(good/(good+neutral+bad))*100}</p></tr>   
      </div>
  )
  return (
    <div>No feedback to give</div>  
    )
  }

const Button = (props) => {
  return (
    <button type='button' onClick={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = (type) => {
    switch(type) {
      case 'good':
        setGood(good+1);
        break;
      case 'neutral':
        setNeutral(neutral+1);
        break;
      case 'bad':
        setBad(bad+1);
        break;
      default:
        break;
    }
      
  }
  return (
    
    <div>
      <h1>give feedback</h1>
      <form>
      <Button onClick={() => handleButtonClick("good")} text="good" />
      <Button onClick={() => handleButtonClick("neutral")} text="neutral" />
      <Button onClick={() => handleButtonClick("bad")} text="bad" />
      </form>{statistics(good, neutral, bad)}
    </div>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)