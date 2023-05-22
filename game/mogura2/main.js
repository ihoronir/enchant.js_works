enchant();

//オブジェクト
var game;
var scoreLabel;
var timeLabel;
var mogura = new Array(18);

//乱数の取得
function rand(num) {
    return Math.floor(Math.random() * num);
}

//もぐらクラス
Mogura = Class.create(Sprite, {
    //初期化
    initialize: function(x, y) {
        Sprite.call(this, 80, 80);
        this.image = game.assets["mogura.png"];
        this.x = x;
        this.y = y;
        this.status = -rand(200);
    },

    //画面更新のたびに実行する処理
    onenterframe: function() {
        //フレームの変更
        this.status++;
        if (this.status < 0) {
            this.frame = 0;
        } else if (this.status == 0) {
            this.frame = 1;
        } else if (this.status == 40) {
            this.status = -rand(200);
        }
        //位置の変更
        if (this.x >= -100){
            this.x-=2;
        }else{
            this.x=500;
        }
    },
});

//メインプログラム
window.onload = function() {
    //Gameオブジェクトの生成
    game = new Game(320, 320);
    game.rootScene.backgroundColor = "rgb(130,255,255)";
    //オブジェクト
    var map = new Array(21);
    var bear;

    //画像の読み込み
    game.preload("mogura.png","inchan.png","map9.png","jump.png",
    "shot.png","rect5788.png","rect5800.png","se2.wav");

    //ゲームの前処理完了時に呼ばれる
    game.onload = function() {
        
        //背景1
        var haikei = new Sprite(640, 320);
        haikei.image = game.assets["rect5788.png"];
        game.rootScene.addChild(haikei);
        haikei.x = 0;
        haikei.y = 0;
        
        //背景2
        var haikei2 = new Sprite(640, 320);
        haikei2.image = game.assets["rect5788.png"];
        game.rootScene.addChild(haikei2);
        haikei2.x = 640;
        haikei2.y = 0;
        
        //地面上
        var jimen1 = new Sprite(640, 25);
        jimen1.image = game.assets["rect5800.png"];
        game.rootScene.addChild(jimen1);
        jimen1.x = 0;
        jimen1.y = 56;
        
        //地面中
        var jimen2 = new Sprite(640, 25);
        jimen2.image = game.assets["rect5800.png"];
        game.rootScene.addChild(jimen2);
        jimen2.x = 0;
        jimen2.y = 136;
        
        //地面中
        var jimen3 = new Sprite(640, 25);
        jimen3.image = game.assets["rect5800.png"];
        game.rootScene.addChild(jimen3);
        jimen3.x = 0;
        jimen3.y = 216;
        
        
        //もぐらの生成
        for (var i = 0; i < 18; i++) {
            mogura[i] = new Mogura(20 + i % 6 * 100, Math.floor(i / 6) * 80);
            game.rootScene.addChild(mogura[i]);
        }
        
        //マップ作成
        for (var i = 0; i < 21; i++) {
            map[i] = new Sprite(16, 224);
            map[i].image = game.assets["map9.png"];
            map[i].x = i * 16;
            map[i].y = 310;
            game.rootScene.addChild(map[i]);
        }

        //シーンの画面更新のたびに実行する処理
        game.rootScene.onenterframe = function() {
            
            //背景１のスクロール
            if(haikei.x>=-640){
                haikei.x--;
            }else{
                haikei.x=638;
            }
            //背景2のスクロール
            if(haikei2.x>=-640){
                haikei2.x--;
            }else{
                haikei2.x=638;
            }

            //マップのスクロール
            for (var i = 0; i < 21; i++) map[i].x -= 4;
            if (map[0].x == -16) {
                //マップのシフト
                for (var i = 0; i < 21; i++) {
                    map[i].x += 16;
                    if (i < 21 - 1) map[i].y = map[i + 1].y;
                }
                
            }
        };
        
        //クマさんの生成
        bear = new Sprite(63, 63);
        bear.image = game.assets["inchan.png"];
        bear.frame = 0;
        bear.x = 24;
        bear.y = 192;
        bear.tx = this.x;
        bear.ty = this.y;
        bear.jumpPow = -1; //ジャンプ力
        bear.jumpAble = true; //ジャンプ可
        game.rootScene.addChild(bear);

        //クマさんの画面更新のたびに実行する処理
        bear.onenterframe = function() {
            
            //上昇
            if (this.jumpPow >= 0) {
                this.y -= this.jumpPow;
                this.jumpPow--;
            }
            //下降
            else {
                this.y -= this.jumpPow;
                this.jumpPow--;
                this.jumpAble = false;
                if (map[3].y != 320 && this.y > map[3].y - 63) {
                    this.y =map[3].y - 63;
                    this.jumpAble = true;
                    this.jumpPow = 0;
                }
            }
            if (this.frame == 1){
                //当たり判定
                for (var i = 0; i < 18; i++){
                    if(this.intersect(mogura[i]) && mogura[i].frame==1){
                        mogura[i].frame = 2;
                        mogura[i].status = 0;
                        scoreLabel.score += 100;
                        game.assets['se2.wav'].play();
                    }
                }
            }
        };
        
        //jumpボタン
        var jumpbotan = new Sprite(89, 44);
        jumpbotan.image = game.assets["jump.png"];

        //画面にスプライトを表示
        game.rootScene.addChild(jumpbotan);

        //位置の指定
        jumpbotan.x = 70;
        jumpbotan.y = 270;
        
        //jumpタッチ開始時の処理
        jumpbotan.ontouchstart = function() {
            if (bear.jumpAble) {
                bear.jumpAble = false;
                bear.jumpPow = 25;
            }
        };

        //jumpタッチ終了時の処理
        jumpbotan.ontouchend = function() {
            if (bear.jumpPow > 0) bear.jumpPow = 0;
        };
        
        //shotボタン
        var shotbotan = new Sprite(89, 44);
        shotbotan.image = game.assets["shot.png"];

        //画面にスプライトを表示
        game.rootScene.addChild(shotbotan);

        //位置の指定
        shotbotan.x = 160;
        shotbotan.y = 270;
        
        //shot押された時の処理
        shotbotan.ontouchend = function() {
            this.tl
            .then(function(){bear.frame = 1;})
            .delay(15)
            .then(function(){bear.frame = 0;});
            
        };
        
        //スコアラベルの生成
        scoreLabel = new ScoreLabel(5, 5);
        scoreLabel.score = 0;
        game.rootScene.addChild(scoreLabel);
        
        //タイムラベルの生成
        timeLabel = new TimeLabel(5, 25, "countdown");
        timeLabel.time =45;
        timeLabel.onenterframe = function() {
            if (timeLabel.time <= 0) {
                game.end(scoreLabel.score,
                scoreLabel.score+"ポイントゲットしたぜ！！");
            }
        }  ;
        game.rootScene.addChild(timeLabel);
    };

    //ゲームの開始
    game.start();
};