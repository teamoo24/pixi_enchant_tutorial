import * as PIXI from 'pixi.js';
import GameManager from 'manager/GameManager'
import Resource from 'Resource';
import Scene from 'Scene/Scene'

export default class TitleScene extends Scene {
	private text!: PIXI.Text;
	// メインループ更新を確認するためのカウント
	private count: number = 0;

	private player!: PIXI.Sprite;
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
	}

	/**
   	* 毎フレームの更新処理
   	*/
   	public update(dt: number): void {
   		super.update(dt);
   	}
}