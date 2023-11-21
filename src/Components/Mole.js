import { useEffect } from 'react'
import moleImg from '../mole.png'


function Mole(props) {
    useEffect (() => {
        let randSeconds = Math.ceil(Math.random() * 9000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width':'10vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}

export default Mole