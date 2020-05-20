import * as PIXI from 'pixi.js';
import GameManager from 'manager/GameManager'
import Scene from 'Scene/Scene'

export default class TitleScene extends Scene {
	private text!: PIXI.Text;
	// メインループ更新を確認するためのカウント
	private count: number = 0;

	/**
	*	コンストラクタ
	*	描画物を初期化する。
	*/
	constructor() {
		super();

		const renderer = GameManager.instance.game.renderer;
		
		this.text = new PIXI.Text('Game Main Page', new PIXI.TextStyle({
			fontSize: 64,
			fill: 0xffffff
		}));
		this.text.interactive = true;
		this.text.anchor.set(0.5, 0.5);
		this.text.position.set(renderer.width *0.5, renderer.height * 0.5);
		this.addChild(this.text);
	}

	/**
   	* 毎フレームの更新処理
   	*/
   	public update(dt: number): void {
   		super.update(dt);
   		this.text.text = `Game Start \n${this.count++}`;
   	}
}