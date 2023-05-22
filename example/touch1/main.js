enchant();

//オブジェクト
var game;

//くまさんクラス
Bear=Class.create(Sprite,//Spriteクラスを継承
{
    //初期化
    initialize:function(x,y){
        Sprite.call(this,32,32);
        this.image=game.assets["chara1.png"];
        this.frame=4;//フレーム
        this.x=x;//X座標
        this.y=y;//Y座標
    },
    
    //画面更新のたびに実行する処理
    onenterframe:function(){
        if(this.frame==4)this.x++;//右へ移動
    },
    
    //タッチした時の処理
    ontouchend:function(){
        this.frame=3;//泣く
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
        
        //一つ目のクマさんを作る
        var bear1=new Bear(10,100);
        game.rootScene.addChild(bear1);
        
        //二つ目のクマさんを作る
        var bear2=new Bear(50,120);
        game.rootScene.addChild(bear2);
        
        //三つ目のクマさんを作る
        var bear3=new Bear(0,150);
        game.rootScene.addChild(bear3);   
    };
    
    //ゲームの開始
    game.start();
};