enchant();
window.onload = function(){

    //ゲームオブジェクトの生成
    var game=new Game(320, 320);

    //読み込む画像の指定
    game.preload("chara1.png");
    
    //ゲームの前処理完了時に呼ばれる
    game.onload = function() {

        //スプライトの生成
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets["chara1.png"];
　　　　sprite.frame = 0;
　　　　sprite.walk=[0,1,0,2];

　　　　//画面更新のたびに実行する処理
　　　　sprite.onenterframe=function(){
　　　　    this.frame=
　　　　        this.walk[(game.frame)/4%4];
　　　　    this.x+=3;//右へ移動
　　　　};
        
        //画面にスプライトを表示
        game.rootScene.addChild(sprite); 
    };
    //ゲームの開始
    game.start();
};
//勇者のp65にオブジェクト、プロパティ、メソッド一覧