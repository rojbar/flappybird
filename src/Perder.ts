import Phaser from 'phaser'

export default class Perder extends Phaser.Scene {
	constructor() {
		super('perder')
	}

	preload() {
		this.load.image('gameover', 'img/gameover.jpg' );
	}

	create() {
		this.add.image(480,320, 'gameover')
	}

}
