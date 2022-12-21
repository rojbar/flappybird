import Phaser from 'phaser'

export default class Perder extends Phaser.Scene {
	constructor() {
		super('perder')
	}

	preload() {
		this.load.image('gameover', 'img/gameover.jpg' );
	}

	create() {
		let bg = this.add.image(480,320, 'gameover');
		bg.displayHeight = 960
		bg.displayWidth = 640
		
		this.input.keyboard.on(`keydown`, (event) => {
			if (event.keyCode === 32 ) {
				this.scene.start('escena');
			}
		});
		this.input.on(`pointerdown`, () => {	
			this.scene.start('escena');
		})
	}

}
