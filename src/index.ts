import * as PIXI from 'pixi.js'
import GameManager from 'manager/GameManager'
import TitleScene from 'Scene/TitleScene'

window.onload = () => {
	GameManager.start({
		glWidth:1136,
		glHeight: 640,
		option: {
			backgroundColor: 0x222222
		},
		view:document.getElementById("game")
	})

	// 最初のシーンの読み込み
	GameManager.loadScene(new TitleScene());
}