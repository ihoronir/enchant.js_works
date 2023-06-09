enchant();

//乱数の取得
function rand(num) {
    return Math.floor(Math.random() * num);
}

//メインプログラム
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    game.rootScene.backgroundColor = "rgb(80,239,255)";
    var floorLen = 0; //床の長さ
    //オブジェクト
    var map = new Array(21);
    var bear;
    var scoreLabel;

    //画像の読み込み
    game.preload("map9.png", "space3.png", "bg.png");

    //ゲームの前処理完了時に呼ばれる
    game.onload = function() {
        //背景
        var bg = new Sprite(320, 320);
        bg.image = game.assets["bg.png"];
        game.rootScene.addChild(bg);

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
            //スコアの加算
            scoreLabel.score++;

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
                    floorLen = 1 + rand(4);
                    map[21 - 1].y = 320 - 16 * (5 + rand(8));
                } else {
                    floorLen = 1 + rand(5);
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
        }

        //タッチ終了時の処理
        game.rootScene.ontouchend = function() {
            if (bear.jumpPow > 0) bear.jumpPow = 0;
        }

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
            if (this.jumpAble) {
                this.frame = this.walk[Math.floor(game.frame / 2) % 4] + 15;
            } else {
                this.frame = 16;
            }

            //ゲームオーバー判定
            if (this.y > map[3].y - 20) {
                this.frame = 18;
                game.end(scoreLabel.score,
                scoreLabel.score+"メートルぼうけんした。");
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
        scoreLabel = new ScoreLabel(5, 300);
        game.rootScene.addChild(scoreLabel);
    }

    //ゲーム開始
    game.start();
}