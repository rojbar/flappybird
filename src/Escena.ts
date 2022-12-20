import Phaser from 'phaser'

export default class Escena extends Phaser.Scene {
	constructor() {
		super('hello-world')
	}

	preload() {
		this.resize();
		window.addEventListener(`resize`, this.resize, false);
		this.load.image(`fondo`,`img/espacio.jpg`);
	}

	create() {
		this.add.sprite(480,320,`fondo`);
	}

	resize(){

	}
}
