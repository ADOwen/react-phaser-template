import { useEffect } from 'react';
import { game } from '../../game/game';
import './GamePage.styles.css'


const Game = () => {

  useEffect(()=>{
    return game;
  }, [])

  return (
    <section id="main" className='gameContainer'>
        
    </section>
  )
}

export default Game;