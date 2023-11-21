import { useEffect } from 'react'
import MoleHill from '../molehill.png'

const EmptySlot = (props) => {
    useEffect (() => {
        let randSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '20vw'}} src={MoleHill} />
        </div>
    )
}

export default EmptySlot