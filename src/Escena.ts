import Phaser from 'phaser'

export default class Escena extends Phaser.Scene {
	constructor() {
		super('hello-world')
	}

	player!: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody

	preload() {
		this.resize();
		window.addEventListener(`resize`, this.resize, false);
		this.load.image(`fondo`,`img/espacio.jpg`);
		this.load.spritesheet(`heroe`,`img/herore.png`,{ frameWidth: 50, frameHeight: 50});
	}

	create() {
		this.add.sprite(480,320,`fondo`);
		
		this.player = this.physics.add.sprite(50,100, `heroe`);
		this.anims.create({
			key: `volar`,
			frames: this.anims.generateFrameNumbers(`heroe`, {start: 0, end: 1}),
			frameRate: 7,
			repeat: -1,
		});
		this.player.play(`volar`)
	}

	resize(){

	}
}
