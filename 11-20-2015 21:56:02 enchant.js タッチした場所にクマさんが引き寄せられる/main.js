enchant();

//オブジェクト
var game;
var bear;

//くまさんクラス
Bear=Class.create(Sprite,//Spriteクラスを継承
{
    //初期化
    initialize:function(){
        Sprite.call(this,32,32);
        this.image=game.assets["chara1.png"];
        this.frame=0;//フレーム
        this.x=160-16;//X座標
        this.y=160-16;//Y座標
        this.tx=this.x;//移動先X座標
        this.ty=this.y;//移動先Y座標
    },
    
    //画面更新のたびに実行する処理
    onenterframe:function(){
        
        //移動先に近づく
        var slow=10;
        this.x+=(this.tx-this.x)/slow;
        this.y+=(this.ty-this.y)/slow;
    }
});

//メインプログラム
window.onload = function(){
    
    //Gameオブジェクトの生成
    game = new Game(320, 320);
    
    //読み込む画像の指定
    game.preload("chara1.png");
    
    //ゲームの前処理完了時に呼ばれる
    game.onload = function(){
        
        //クマさんを作る
        bear=new Bear();
        game.rootScene.addChild(bear);
        
        //タッチした時の処理
        game.rootScene.ontouchend=function(){
            bear.tx=event.x;//移動先X座標にタッチX座標を指定
            bear.ty=event.y;//移動先Y座標にタッチY座標を指定
        }; 
    };
    
    //ゲームの開始
    game.start();
};