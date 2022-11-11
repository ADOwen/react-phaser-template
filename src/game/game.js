import Phaser from 'phaser'
import firstScene from './scenes/startScene'

export const game = () => {
 
  let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    scene: firstScene,
    title: "Adventure",
    parent: "main",
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 600 },
        debug: false,
      },
    },
  };

  return new Phaser.Game(config);
}






