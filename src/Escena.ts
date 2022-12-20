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
		this.load.image(`pipe0`, `img/pipe0.png`);
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

		this.anims.create({
			key: `saltar`,
			frames: this.anims.generateFrameNumbers(`heroe`, {start: 2, end: 2}),
			frameRate: 7,
			repeat: 1,
		});
		this.input.keyboard.on(`keydown`, (event) => {
			if (event.keyCode === 32) {
				this.saltar()
			}
		});
		this.input.on(`pointerdown`, () => {
			this.saltar();
		})
		this.player.on(`animationComplete`, this.animationComplete, this);
	}

	saltar () {
		this.player.setVelocityY(-200);
		this.player.play(`saltar`);
	}

	animationComplete(animation: any) {
		if (animation.key === `saltar`){
			this.player.play(`volar`);
		}
	}

	nuevaColumna() {
		const columna  =this.physics.add.group();
		const hueco = Math.floor(Math.random()*5) + 1;
		for (let i = 0; i < 8; i--){
			if (i !== hueco && i !== hueco + 1 && i !== hueco - 1){
				const cubo = columna.create(960, i*100 + 10,`pipe0`);
				cubo.body.allowGravity = false
			}
		}
		columna.setVelocityX(-200);
		// columna.checkWorldBounds = true;
		// columna.outOfBoundsKill = true;
		this.time.delayedCall(1000, this.nuevaColumna, [], this);
		this.physics.add.overlap(this.player, columna, this.hitColumna, undefined, this);
	}

	hitColumna(){
		alert(`game over`);
	}
	
	resize() {

	}
}
