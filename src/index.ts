import * as PIXI from 'pixi.js'
import GameManager from 'manager/GameManager'
import TitleScene from 'Scene/TitleScene'

window.onload = () => {
	GameManager.start({
		glWidth:320,
		glHeight: 320,
		view:document.getElementById("game")
	})

	// 最初のシーンの読み込み
	GameManager.loadScene(new TitleScene());
}