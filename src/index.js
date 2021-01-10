import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const statistics = (good, neutral, bad) => {
    return (
      <div>
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>  
        <p>Bad {bad}</p>  
        <p>All {good+neutral+bad}</p>  
        <p>Average {(good*1-bad*1+neutral*0)/8}</p>  
        <p>Positive {(good/(good+neutral+bad))*100}</p>   
      </div>
    )
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h1>give feedback</h1>
      <form><button type='button' onClick={() => setGood(good+1)}>good</button>
      <button type='button' onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button type='button' onClick={() => setBad(bad+1)}>bad</button>
      </form>
      {statistics(good, neutral, bad)} 
    </div>    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)