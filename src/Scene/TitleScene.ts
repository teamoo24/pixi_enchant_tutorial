import * as PIXI from 'pixi.js';
import GameManager from 'manager/GameManager'
import Resource from 'Resource';
import Scene from 'Scene/Scene'

export default class TitleScene extends Scene {
	private text!: PIXI.Text;
	// メインループ更新を確認するためのカウント
	private count: number = 0;

	private player!: PIXI.Sprite;

	static keys: { [key: number]: boolean; } = {};

	private keyslist;
	/**
	*	コンストラクタ
	*	描画物を初期化する。
	*/
	constructor() {
		super();
		const renderer = GameManager.instance.game.renderer;

		// スプライトの大きさ設定
		let t32Rect = new PIXI.Rectangle(0, 0, 48, 48);

   		// create a new Sprite from an image path
		this.player = new PIXI.Sprite(new PIXI.Texture(PIXI.BaseTexture.from(Resource.Static.charactor[0]) , t32Rect));

		// center the sprite's anchor point
		this.player.anchor.set(0.5);

		// move the sprite to the screen
		this.player.x = 120;
		this.player.y = 50;

		this.addChild(this.player)


		window.addEventListener("keydown",this.keysDown);
		window.addEventListener("keyup",this.keysUp);
	}

	public keysDown(e) {
		console.log(e.keyCode)

		TitleScene.keys[e.keyCode] = true;
	}

	public keysUp(e) {
		console.log(e.keyCode)

		TitleScene.keys[e.keyCode] = false;
	}
	// switch (e.code) {
	// 	case "ArrowLeft":	
	// 		console.log("L")
	// 		break;
	// 	case "ArrowRight":
	// 		console.log("R")
	// 		break;
	// 	case "ArrowUp":
	// 		console.log("U")
	// 		break;
	// 	case "ArrowDown":
	// 		console.log("D")
	// 		break;
	// 	default:
	// 		console.log(e.code)
	// 		break;
	// }
	/**
   	* 毎フレームの更新処理
   	*/
   	public update(dt: number): void {
   		super.update(dt);

   		if (TitleScene.keys['39']) {
   			this.player.x += 5;
   		}

		if (TitleScene.keys['37']) {
   			this.player.x -= 5;
   		}

   		if (TitleScene.keys['40']) {
   			this.player.y += 5;
   		}

   		if (TitleScene.keys['38']) {
   			this.player.y -= 5;
   		}   		
   	}
}