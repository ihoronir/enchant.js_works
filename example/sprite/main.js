enchant();
window.onload = function() {

    //ゲームオブジェクトの生成
    var game = new Game(320, 320);

    //読み込む画像の指定
    game.preload("chara1.png");
    //複数のファイルを読み込むとき→game.preload("chare1.png","chare2.png");
    
    //ゲームの前処理完了時に呼ばれる
    game.onload = function() {

        //スプライトの生成
        var sprite = new Sprite(32, 32);
        sprite.image = game.assets["chara1.png"];

        //画面にスプライトを表示
        game.rootScene.addChild(sprite);

        //位置の指定
        sprite.x = 148;
        sprite.y = 148;

        //フレームの指定
        sprite.frame = 4;

        //回転角を指定
        sprite.originX = 32;
        sprite.originY = 32;
        //originプロパティで回転の中心を指定
        sprite.rotation = 90;
        //角度の指定は右回りで考える
        //拡大、縮小の指定
        sprite.originx = 0;
        sprite.originx = 0;
        //originプロパティで拡大、縮小の中心を指定
        sprite.scaleX = 2;
        sprite.scaleY = 2;
        //倍率の初期値は1
    };
    //ゲームの開始
    game.start();
};
//勇者のp65にオブジェクト、プロパティ、メソッド一覧