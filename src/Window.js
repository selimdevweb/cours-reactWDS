import React, {useEffect, useState} from 'react'

export default function Window() {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)
    const handleSize = () => {
        setwindowWidth(window.innerWidth)
    }
    useEffect (()=>{
        window.addEventListener('resize',handleSize)
        /* pour nettoyer */
        return () =>{
            console.log('cest nettoyé')
            window.removeEventListener('resize',handleSize)
        }
    }, [])
    /* ne pas oublier de mettre à la fin ,[] */
    return (
        <div>
           {windowWidth}
        </div>
    )
}
