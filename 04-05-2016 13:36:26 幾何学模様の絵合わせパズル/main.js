enchant();
//オブジェクト
var timeLabel;
//乱数の取得
function rand(num) {
    return Math.floor(Math.random() * num);
}

//メインプログラム
window.onload = function() {
    //Gameオブジェクトの生成
    var game = new Game(320, 320);
    var shuffle = 0;

    //オブジェクト
    var piece = new Array(9);
    var data = new Array(9);

    //画像の読み込み
    game.preload("bg2.png", "picture.png","clear.png");

    //ゲームの前処理完了時に呼ばれる
    game.onload = function() {
        //背景の生成
        var bg = new Sprite(320, 320);
        bg.image = game.assets["bg2.png"];
        game.rootScene.addChild(bg);
        //ピースの生成
        for (var i = 0; i < 9; i++) {
            piece[i] = new Sprite(100, 100);
            piece[i].frame = i;
            piece[i].image = game.assets["picture.png"];
            data[i] = i;
            game.rootScene.addChild(piece[i]);
        }
        piece[8].visible = false;
         //タイムラベルの生成
        timeLabel = new TimeLabel(5, 5, "countup");
        timeLabel.time = 0;
        timeLabel.onenterframe = function() {
            if (timeLabel.time >= 90){
                game.end(100-timeLabel.time, 
                "時間切れだよ。またチャレンジしてね！");
            }
        }  
        game.rootScene.addChild(timeLabel);

        //シャッフルの実行
        shuffle = 20;
        while (shuffle > 0) {
            if (game.movePiece(rand(3), rand(3)) == true) shuffle--;
        }
        for (var i = 0; i < 9; i++) {
            piece[data[i]].x = 10 + 100 * (i % 3);
            piece[data[i]].y = 10 + 100 * Math.floor(i / 3);
        }
    }

    //タッチ時に呼ばれる
    game.rootScene.ontouchstart = function(e) {
        if (10 < e.x && e.x < 310 && 10 < e.y && e.y < 310) {
            var tx = Math.floor((e.x - 10) / 100);
            var ty = Math.floor((e.y - 10) / 100);
            game.movePiece(tx, ty);
        }
    }

    //ピースの移動
    game.movePiece = function(tx, ty) {
        //空きマスの行番号と列番号の計算
        var fx = 0;
        var fy = 0;
        for (var i = 0; i < 9; i++) {
            if (data[i] == 8) {
                fx = i % 3;
                fy = Math.floor(i / 3);
                break;
            }
        }
        if ((fx == tx && fy == ty) ||
            (fx != tx && fy != ty)) return false;

        //ピースを上にシフト
        if (fx == tx && fy < ty) {
            for (var i = fy; i < ty; i++) {
                data[fx + i * 3] = data[fx + i * 3 + 3];
            }
            data[tx + ty * 3] = 8;
        }
        //ピースを下にシフト
        else if (fx == tx && fy > ty) {
            for (var i = fy; i > ty; i--) {
                data[fx + i * 3] = data[fx + i * 3 - 3];
            }
            data[tx + ty * 3] = 8;
        }
        //ピースを左にシフト
        else if (fy == ty && fx < tx) {
            for (var i = fx; i < tx; i++) {
                data[i + fy * 3] = data[i + fy * 3 + 1];
            }
            data[tx + ty * 3] = 8;
        }
        //ピースを右にシフト
        else if (fy == ty && fx > tx) {
            for (var i = fx; i > tx; i--) {
                data[i + fy * 3] = data[i + fy * 3 - 1];
            }
            data[tx + ty * 3] = 8;
        }
        if (shuffle > 0) return true;

        //ピースの移動
        var clearCheck = 0;
        for (var i = 0; i < 9; i++) {
            var dx = 10 + 100 * (i % 3);
            var dy = 10 + 100 * Math.floor(i / 3);
            piece[data[i]].tl.moveTo(dx, dy, 3);
            if (data[i] == i) clearCheck++;
        }

        //ゲームのクリア判定
        if (clearCheck == 9) {
            piece[8].visible = true;
            clear = new Sprite(267, 48);
            clear.image = game.assets["clear.png"];
            clear.x = 20;
            clear.y = 100;    
            game.rootScene.addChild(clear);
            timeLabel._count = 0;
            game.rootScene.tl.delay(150).then(function() {
                game.end(100-timeLabel.time, 
                timeLabel.time+"秒でパズルが解けた。がんばったね！");
            });
        }
        return true;
    }
    //ゲームの開始
    game.start();
}