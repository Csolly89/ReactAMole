import { useEffect } from 'react'
import moleImg from '../mole.png'


function Mole(props) {
    useEffect (() => {
        let randSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.toggle(true)
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