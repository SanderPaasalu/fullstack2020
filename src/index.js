import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good+neutral+bad}</p>
      <p>average {(good*1-bad*(1)+neutral*0)/2}</p>
      <p>positive {(good/(good+neutral+bad))*100}%</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)