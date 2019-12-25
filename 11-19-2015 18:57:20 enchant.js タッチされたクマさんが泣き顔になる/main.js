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
　　　　sprite.frame = 4;
　　　　sprite.x=0;
　　　　sprite.y=30;

　　　　//画面更新のたびに実行する処理
　　　　sprite.onenterframe=function(){
　　　　    if(this.frame==4)this.x++;//右へ移動
　　　　};
　　　　
　　　　//タッチした時の処理
　　　　sprite.ontouchend=function(event){
　　　　    this.frame=3;
　　　　};
        
        //画面にスプライトを表示
        game.rootScene.addChild(sprite); 
    };
    //ゲームの開始
    game.start();
};
//勇者のp71にオブジェクト、プロパティ、メソッド一覧