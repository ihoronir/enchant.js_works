enchant();
//オブジェクト
var map = new Array(21);
var bear;
var scoreLabel;
var lifeLabel;
var coin = new Array(5);
var bakudan = new Array(5);
var heat = new Array(2);


//乱数の取得
function rand(num) {
    return Math.floor(Math.random() * num);
}

//メインプログラム
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.rootScene.backgroundColor = "rgb(0,0,10)";
    var floorLen = 0; //床の長さ
    //画像の読み込み
    game.preload("map9.png", "space3.png", "bg.png", "bg2.png", "bg3.png",
    "icon0.png" ,"effect0.png");

    //結果
    function result() {
        //シーンの生成
        var scene = new Scene();
        scene.backgroundColor = "rgb(255, 255, 255)";
        //背景
        var bg = new Sprite(320, 320);
        bg.image = game.assets["bg2.png"];
        scene.addChild(bg);

        var bga = new Sprite(300, 300);
        bga.image = game.assets["bg3.png"];
        bga.x = 10;
        bga.y = 10;
        scene.addChild(bga);


        //scoreの生成
        var label = new Label();
        label.text = scoreLabel.score + "万円を獲得した!";
        label.font = "bold 24px monospace";
        label.y = 250;
        label.width = 320;
        label.textAlign = "center";
        scene.addChild(label);
        game.pushScene(scene);
        //シーンのアニメーション
        scene.tl.
        scaleTo(2, 2,0).
        rotateBy(360, 30).
        scaleTo(1, 1, 60).
        delay(150).then(function() {
            game.end(scoreLabel.score,
                scoreLabel.score+"万円獲得！");
        });
    }
    
    //コインクラス
    Coin = Class.create(Sprite, {
        //初期化
        initialize: function() {
            Sprite.call(this, 16, 16);
            this.image = game.assets["icon0.png"];
            this.clear();
        },
        //画面更新時処理
        onenterframe: function() {
            //くまとの関わり
            if(this.within(bear)){
                //スコアの加算
                this.tl
                .rotateBy(-720,3)
                .then(function(){scoreLabel.score++;})
                .then(function(){this.clear();});
            }
            //移動
            if (this.x > -16) {
                this.x -= this.speed;
            }
            //画面から消えた時の処理
            else {
                this.clear();
            }
        },
        //クリア
        clear: function() {
            this.image = game.assets["icon0.png"];
            this.frame = 14;
            this.y = rand(230) - 4;
            this.x =rand(320)+320;
            this.speed = 4;
        }
    });
    
    Bakudan = Class.create(Sprite, {
        //初期化
        initialize: function() {
            Sprite.call(this, 16, 16);
            this.image = game.assets["icon0.png"];
            this.clear();
        },
        //画面更新時処理
        onenterframe: function() {
            //くまとの関わり
            if(this.within(bear)){
                //スコアの加算
                this.tl
                .then(function(){lifeLabel.life--;})
                .then(function(){this.clear();});
            }
            //移動
            if (this.x > -16) {
                this.x -= this.speed;
            }
            //画面から消えた時の処理
            else {
                this.clear();
            }
        },
        //クリア
        clear: function() {
            this.image = game.assets["icon0.png"];
            this.frame = 26;
            this.y = rand(230) - 4;
            this.x =rand(320)+320;
            this.speed =rand(4)+5;
        }
    });
    Heat = Class.create(Sprite, {
        //初期化
        initialize: function() {
            Sprite.call(this, 16, 16);
            this.image = game.assets["icon0.png"];
            this.clear();
        },
        //画面更新時処理
        onenterframe: function() {
            //くまとの関わり
            if(this.within(bear)){
                //スコアの加算
                this.tl
                .then(function(){lifeLabel.life++;})
                .then(function(){this.clear();});
            }
            //移動
            if (this.x > -16) {
                this.x -= this.speed;
            }
            //画面から消えた時の処理
            else {
                this.clear();
            }
        },
        //クリア
        clear: function() {
            this.image = game.assets["icon0.png"];
            this.frame = 10;
            this.y = rand(200) + 26;
            this.x =rand(320)+320;
            this.speed =rand(2)+2;
        }
    });
    //ゲームの前処理完了時に呼ばれる
    game.onload = function() {
        //背景
        var bg = new Sprite(1278, 320);
        bg.image = game.assets["bg.png"];
        game.rootScene.addChild(bg);

        var bg2 = new Sprite(1278, 320);
        bg2.image = game.assets["bg.png"];
        bg2.x = 1278;
        bg2.y = 0;
        game.rootScene.addChild(bg2);


        //マップの生成
        for (var i = 0; i < 21; i++) {
            map[i] = new Sprite(16, 224);
            map[i].image = game.assets["map9.png"];
            map[i].x = i * 16;
            map[i].y = 224;
            game.rootScene.addChild(map[i]);
        }

        //シーンの画面更新のたびに実行する処理
        game.rootScene.onenterframe = function() {
            //背景のスクロール
            if (bg.x == -1278) {
                bg.x = 1277;
            } else {
                bg.x -= 1;
            }
            if (bg2.x == -1278) {
                bg2.x = 1277;
            } else {
                bg2.x -= 1;
            }

            //マップのスクロール
            for (var i = 0; i < 21; i++) map[i].x -= 4;
            if (map[0].x == -16) {
                //マップのシフト
                for (var i = 0; i < 21; i++) {
                    map[i].x += 16;
                    if (i < 21 - 1) map[i].y = map[i + 1].y;
                }
                //新規マップの高さの計算
                if (floorLen > 0) {
                    floorLen--;
                    map[21 - 1].y = map[22 - 2].y;
                } else if (map[21 - 2].y == 320) {
                    floorLen = 1 + rand(40);
                    map[21 - 1].y = 250 + rand(30);
                } else {
                    floorLen = 1 + rand(4);
                    map[21 - 1].y = 320;
                }
            }
        };

        //タッチ開始時の処理
        game.rootScene.ontouchstart = function() {
            if (bear.jumpAble) {
                bear.jumpAble = false;
                bear.jumpPow = 20;
            }
        };

        //タッチ終了時の処理
        game.rootScene.ontouchend = function() {
            if (bear.jumpPow > 0) bear.jumpPow = 0;
        };

        //クマさんの生成
        bear = new Sprite(32, 32);
        bear.image = game.assets["space3.png"];
        bear.frame = 15;
        bear.walk = [0, 1, 0, 2];
        bear.x = 24;
        bear.y = 192;
        bear.tx = this.x;
        bear.ty = this.y;
        bear.jumpPow = -1; //ジャンプ力
        bear.jumpAble = true; //ジャンプ可        
        game.rootScene.addChild(bear);

        //クマさんの画面更新のたびに実行する処理
        bear.onenterframe = function() {
            //resoult判定
            if (lifeLabel.life < 1) {
                lifeLabel.life--;
                this.image=game.assets["effect0.png"];
                bear.tl
                .scaleTo(5,5,5);
                game.rootScene.tl
                .delay(5)
                .then(function() {game.rootScene.removeChild(bear);})
                .delay(30)
                .then(function() {result();});
            } 
                
            if (this.jumpAble) {
                this.frame = this.walk[Math.floor(game.frame / 2) % 4] + 15;
            } else {
                this.frame = 16;
            }

            //resoult判定
            if (this.y > map[3].y - 20) {
                if (lifeLabel.life > 0) {
                    lifeLabel.life--;
                    this.y = 230;
                    this.jumpPow = 10;

                }
            }
            //上昇
            else if (this.jumpPow >= 0) {
                this.y -= this.jumpPow;
                this.jumpPow--;
            }
            //下降
            else {
                this.y -= this.jumpPow;
                this.jumpPow--;
                this.jumpAble = false;
                if (map[3].y != 320 && this.y > map[3].y - 32) {
                    this.y = map[3].y - 32;
                    this.jumpAble = true;
                    this.jumpPow = 0;
                }
            }
            
        };
        
        //スコアラベルの生成
        scoreLabel = new ScoreLabel(80, 280);
        game.rootScene.addChild(scoreLabel);
        //ライフラベルの生成
        lifeLabel = new LifeLabel(80, 300, 9);
        game.rootScene.addChild(lifeLabel);
        lifeLabel.life = 9;
        
        //コイン
        for(var i=0; i<5; i++){
            coin[i]=new Coin();
            game.rootScene.addChild(coin[i]);
        }
        //爆弾
        for(var i=0; i<5; i++){
            bakudan[i]=new Bakudan();
            game.rootScene.addChild(bakudan[i]);
        }
        //爆弾
        for(var i=0; i<2; i++){
            heat[i]=new Heat();
            game.rootScene.addChild(heat[i]);
        }
    };
    //ゲーム開始
    game.start();
};