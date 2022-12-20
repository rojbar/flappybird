import Phaser from 'phaser'

import Escena from './Escena'
import Perder from './Perder'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 500 },
		},
	},
	scene: [Escena, Perder],
}

export default new Phaser.Game(config)
