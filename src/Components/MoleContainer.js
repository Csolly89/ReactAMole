import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

// minus a point if the mole hasn't been clicked in a certain amount of time
// if statement based on time from last click to minus a point..


    let displayMole = theMole 
    ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> 
    : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{ 'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}

export default MoleContainer
