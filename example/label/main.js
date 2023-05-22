enchant();
window.onload=function() {
    
    //Gameオブジェクトの生成
    var game=new Game(320,320);

    //ゲームの前処理完了時に呼ばれる
    game.onload=function() {
        
        //ラベルの生成
        var label=new Label();
        label.text="こんにちは";
        
        //位置の指定
        label.x=60;
        label.y=60;
       
        //文字色の指定
        label.color="rgb(255,0,0)";
        
        //文字フォントの指定
        label.font="32px serif";
        //勇者のp58にフォント一覧
        //~pxはピクセル数の指定
        
        //シーンにラベルを追加
        game.rootScene.addChild(label);
    };

    //ゲームの開始
    game.start();
};
//勇者のp59にオブジェクト、プロパティ、メソッド一覧