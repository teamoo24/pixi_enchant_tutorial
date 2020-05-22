import * as PIXI from 'pixi.js';
import GameManager from 'manager/GameManager'
import Resource from 'Resource';
import Scene from 'Scene/Scene'

export default class TitleScene extends Scene {
	private text!: PIXI.Text;
	// メインループ更新を確認するためのカウント
	private count: number = 0;

	private speed: number = 2;

	private player!: PIXI.extras.AnimatedSprite;

	private renderer = GameManager.instance.game.renderer;

	static keys: { [key: number]: boolean; } = {};
	static playerSheet: {[key:string]:PIXI.Texture[]} = {};

	/**
	*	コンストラクタ
	*	描画物を初期化する。
	*/
	constructor() {
		super();
		this.setText();
		this.createPlayerSheet();
		this.createPlayer();
		window.addEventListener("keydown",this.keysDown);
		window.addEventListener("keyup",this.keysUp);
	}

	public setText():void {
		this.text = new PIXI.Text('pixi.js サンプル', new PIXI.TextStyle({
			fontFamily:'sens-serif',
			fontSize: 18,
			fill: 0xffffff
		}));
		this.text.anchor.set(0, 0);
		this.text.position.set(16,0);
		GameManager.instance.game.stage.addChild(this.text);
	}

	/**
	*	キャラクタのアニメーション作成
	*
	*/
	public createPlayerSheet():void {

		let ssheet = PIXI.BaseTexture.from(Resource.Static.charactor[0]);
		let w = 48;
		let h = 48;

		TitleScene.playerSheet["standSouth"] = [
			new PIXI.Texture(ssheet, new PIXI.Rectangle(0*w, 0*h, w, h))
		]
		TitleScene.playerSheet["standEast"] = [
			new PIXI.Texture(ssheet, new PIXI.Rectangle(1*w, 0*h, w, h))
		]
		TitleScene.playerSheet["standNorth"] = [
			new PIXI.Texture(ssheet, new PIXI.Rectangle(2*w, 0*h, w, h))
		]
		TitleScene.playerSheet["standWest"] = [
			new PIXI.Texture(ssheet, new PIXI.Rectangle(3*w, 0*h, w, h))
		]	
		TitleScene.playerSheet["walkSouth"] = [
			new PIXI.Texture(ssheet, new PIXI.Rectangle(0*w, 0*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(0*w, 1*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(0*w, 2*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(0*w, 3*h, w, h))
		]
		TitleScene.playerSheet["walkWest"] = [
			new PIXI.Texture(ssheet, new PIXI.Rectangle(1*w, 0*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(1*w, 1*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(1*w, 2*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(1*w, 3*h, w, h))
		]
		TitleScene.playerSheet["walkNorth"] = [
			new PIXI.Texture(ssheet, new PIXI.Rectangle(2*w, 0*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(2*w, 1*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(2*w, 2*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(2*w, 3*h, w, h))
		]
		TitleScene.playerSheet["walkEast"] = [
			new PIXI.Texture(ssheet, new PIXI.Rectangle(3*w, 0*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(3*w, 1*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(3*w, 2*h, w, h)),
			new PIXI.Texture(ssheet, new PIXI.Rectangle(3*w, 3*h, w, h))
		]
	}

	/**
	*	キャラクタを作成
	*
	*/
	public createPlayer():void {
		this.player = new PIXI.extras.AnimatedSprite(TitleScene.playerSheet.standSouth);
		this.player.anchor.set(0.5);
		this.player.animationSpeed = .5;
		this.player.loop = false;
		this.player.x = GameManager.instance.game.view.width /2;
		this.player.y = GameManager.instance.game.view.height / 2;
		GameManager.instance.game.stage.addChild(this.player)
		this.player.play();
	}	

	/**
	*	キーボードを押したときのイベント処理
	*
	*/
	public keysDown(e) {
		console.log(e.keyCode)

		TitleScene.keys[e.keyCode] = true;
	}

	/**
	*	キーボードを外したときのイベント処理
	*
	*/
	public keysUp(e) {
		console.log(e.keyCode)

		TitleScene.keys[e.keyCode] = false;
	}

	/**
   	* 毎フレームの更新処理
   	*/
   	public update(dt: number): void {
   		super.update(dt);

   		//右
   		if (TitleScene.keys['39']) {
   			if (!this.player.playing){
   				this.player.textures = TitleScene.playerSheet.walkEast;
   				this.player.play();
   			}
   			this.player.x += 5;
   		}

   		//左
		if (TitleScene.keys['37']) {
			if (!this.player.playing){
   				this.player.textures = TitleScene.playerSheet.walkWest;
   				this.player.play();
   			}
   			this.player.x -= 5;
   		}

   		//下
   		if (TitleScene.keys['40']) {
   			if (!this.player.playing){
   				this.player.textures = TitleScene.playerSheet.walkSouth;
   				this.player.play();
   			}
   			this.player.y += 5;
   		}

   		//上
   		if (TitleScene.keys['38']) {
   			if (!this.player.playing){
   				this.player.textures = TitleScene.playerSheet.walkNorth;
   				this.player.play();
   			}
   			this.player.y -= this.speed;
   		}   		
   	}
}