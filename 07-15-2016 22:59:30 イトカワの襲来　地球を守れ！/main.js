enchant();

//オブジェクト
var game;
var timeLabel;
var fighter;
var bullet = new Array(16);
var meteo = new Array(16);

//乱数の取得
function rand(num) {
    return Math.floor(Math.random() * num);
}

//弾クラス
Bullet = Class.create(Sprite, {
    //初期化
    initialize: function() {
        Sprite.call(this, 32, 32);
        this.image = game.assets["space0.png"];
        this.visible = false;
        this.frame=2;
    },
    //画面更新のたびに実行する処理
    onenterframe: function() {
        if (this.visible == false) return;
        this.y -= 10;
        if (this.y > -32) {
            //弾と隕石の衝突判定
            for (var i = 0; i < 16; i++) {
                if (meteo[i].status < 0 && this.within(meteo[i], 32)) {
                    meteo[i].bom();
                    this.visible = false;
                }
            }
        } else {
            this.visible = false;
        }
    }
});

//隕石クラス
Meteo = Class.create(Sprite, {
    //初期化
    initialize: function() {
        Sprite.call(this, 64, 64);
        this.image = game.assets["space1.png"];
        this.clear();
    },
    //画面更新のたびに実行する処理
    onenterframe: function() {
        //移動
        if (this.status < 0) {
            this.y += this.speed;

            //ゲームオーバー判定
            if (this.y > 450) 
            game.end(timeLabel.time,timeLabel.time+ "秒地球を守り切った。");
        }
        //爆発
        else if (this.status < 5) {
            this.frame = status;
            this.status++;
            game.assets['bomb4.wav'].play();
        } 
        //クリア
        else {
            this.clear();
        }
    },
    //クリア
    clear: function() {
        this.image = game.assets["space1.png"];
        this.status = -1;
        this.y = -rand(640) - 32;
        this.x = rand(320) - 32;
        this.speed = 2 + rand(1);
    },
    //爆発
    bom: function() {
        this.image = game.assets["effect0.png"];
        this.frame = 0;
        this.status = 0;
    }
});


//メインプログラム
window.onload = function() {
    //ゲームオブジェクトの生成
    game = new Game(320, 320);
    game.rootScene.backgroundColor = "rgb(3,3,3)";

    //画像&音声の読み込み
    game.preload("shooting.png", "effect0.png", "bg.png", "space0.png","space1.png","shot3.wav","bomb4.wav");

    //ゲームの前処理完了時に呼ばれる
    game.onload = function() {
        //背景の生成
        var bg = new Sprite(320, 320);
        bg.image = game.assets["bg.png"];
        game.rootScene.addChild(bg);
        
        //戦闘機の生成
        fighter = new Sprite(32, 32);
        fighter.image = game.assets["shooting.png"];
        fighter.x = 160 - 16;
        fighter.y = 260;
        fighter.tx = 160 - 16;
        game.rootScene.addChild(fighter);

        //戦闘機の画面更新のたびに実行する処理
        fighter.onenterframe = function() {
            //左移動
            if (this.x - 4 > this.tx) {
                this.x -= 4;
            }
            //右移動
            else if (this.x + 4 < this.tx) {
                this.x += 4;
            }
        }

        //隕石の生成
        for (var i = 0; i < 16; i++) {
            meteo[i] = new Meteo();
            game.rootScene.addChild(meteo[i]);
        }
        
        //弾の生成
        for (var i = 0; i < 16; i++) {
            bullet[i] = new Bullet();
            game.rootScene.addChild(bullet[i]);
        }

        //タイムラベルの生成
        timeLabel = new TimeLabel(5, 5, "countup");
        timeLabel.time = 0;
        game.rootScene.addChild(timeLabel);
    }

    //画面のタッチ開始時に呼ばれる
    game.rootScene.ontouchstart = function(e) {
        fighter.tx = e.x - 16;
    }

    //画面のタッチ移動時に呼ばれる
    game.rootScene.ontouchmove = function(e) {
        fighter.tx = e.x - 16;
    }

    //画面のタッチ終了時に呼ばれる
    game.rootScene.ontouchend = function(e) {
        game.assets['shot3.wav'].play();
        //弾の発射
        for (var i = 0; i < 16; i++) {
            if (bullet[i].visible == false) {
                bullet[i].moveTo(fighter.x, fighter.y - 16);
                bullet[i].visible = true;
                break;
            }
        }
    }

    //ゲームの開始
    game.start();
}