import Phaser from 'phaser'

let startScene = new Phaser.Scene('Start');
    
startScene.create = function () {
    this.add.text(180,150, 'Beat Up The Baddies', {fill: '#fff', fontSize:'36px'} )
    this.add.text(310,350, 'Click to Start',{fill: '#fff', fontSize: '18px'})
    this.input.on('pointerup', ()=>{
        this.scene.start('Game')
    })   
};

export default startScene;
