import { useEffect } from 'react';
import { game } from '../../game/game';
import './ArcadePage.styles.css'


const ArcadePage = () => {

  useEffect(()=>{
    return game;
  }, [])

  return (
    <section id="main" className='gameContainer'>
        
    </section>
  )
}

export default ArcadePage;