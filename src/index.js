import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  return (    
    <div>
      <Header course={course} />
      <Content part1 part2 part3/>
      <Total exercises/>
    </div>
  )
}

const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Part part1={part1} exercises1={exercises1}/>
      <Part part2={part2} exercises2={exercises2}/>
      <Part part3={part3} exercises3={exercises3}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

ReactDOM.render(<App />, document.getElementById('root'))