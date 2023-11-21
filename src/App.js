import { useState } from 'react'
import MoleContainer from './Components/MoleContainer'

function App() {
  let [score,setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 16; i++) {
      hills.push(
        <MoleContainer 
        key={i}
        setScore={setScore}
        score={score} />
      )
    }
    return (
      <div>
        [hills]
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!!</h1>
      {score}
      {createMoleHill()}
      {/* <MoleContainer /> */}
    </div>
  );
}

export default App;


// Planning
// App.js will contain the score state variable
// MoleContainer-component that decides which child comonent is rendered
// Mole- will represent a displayed mole, ultimately will contain a timer determining the lifespan - true
// EmptySlot- represent an empty molehill or an invalid location to click - false
//
// app- function to generate nine Molecontainers
// MoleContainer - handleClick function that will increment the score by 1 and immediately set the clicked on mole to no longer display (pass down to only to mole component)
// Mole and empty slot - useEffect hook that will start the timer and clean it up afterwards