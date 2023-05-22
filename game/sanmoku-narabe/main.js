enchant();
//ゲームオブジェクト
var game;
//乱数
function rand(num) {
    return Math.floor(Math.random() * num);
}
//プレイヤーの手かしら？？
var cando=0;
//盤面の配列！
var banmen=[0,0,0,0,0,0,0,0,0];
//コマの定義
var koma0  = new Sprite(85,85);
var koma1  = new Sprite(85,85);
var koma2  = new Sprite(85,85);
var koma3  = new Sprite(85,85);
var koma4  = new Sprite(85,85);
var koma5  = new Sprite(85,85);
var koma6  = new Sprite(85,85);
var koma7  = new Sprite(85,85);
var koma8  = new Sprite(85,85);

//cpuAI

function cpu(){
    if(banmen[0]==1 && banmen[1]==1 && banmen[2]===0){
        banmen[2]=2;
        koma2.frame=banmen[2];
    }else{
            if(banmen[1]==1 && banmen[2]==1 && banmen[0]===0){
            banmen[0]=2;
            koma0.frame=banmen[0];
        }else{
            if(banmen[0]==1 && banmen[2]==1 &&  banmen[1]===0){
                banmen[1]=2;
                koma1.frame=banmen[1];
            }else{
                if(banmen[3]==1 && banmen[4]==1 && banmen[5]===0){
                    banmen[5]=2;
                    koma5.frame=banmen[5];
                }else{
                    if(banmen[4]==1 && banmen[5]==1 && banmen[3]===0){
                        banmen[3]=2;
                        koma3.frame=banmen[3];
                    }else{
                        if(banmen[3]==1 && banmen[5]==1 && banmen[4]===0){
                            banmen[4]=2;
                            koma4.frame=banmen[4];
                        }else{
                            if(banmen[6]==1 && banmen[7]==1 && banmen[8]===0){
                                banmen[8]=2;
                                koma8.frame=banmen[8];
                            }else{
                                if(banmen[7]==1 && banmen[8]==1 && banmen[6]===0){
                                    banmen[6]=2;
                                    koma6.frame=banmen[6];
                                }else{
                                    if(banmen[6]==1 && banmen[8]==1 && banmen[7]===0){
                                        banmen[7]=2;
                                        koma7.frame=banmen[7];
                                    }else{
                                        if(banmen[0]==1 && banmen[3]==1 && banmen[6]===0){
                                            banmen[6]=2;
                                            koma6.frame=banmen[6];
                                        }else{
                                            if(banmen[0]==1 && banmen[6]==1 && banmen[3]===0){
                                                banmen[3]=2;
                                                koma3.frame=banmen[3];
                                            }else{
                                                if(banmen[3]==1 && banmen[6]==1 && banmen[0]===0){
                                                    banmen[0]=2;
                                                    koma0.frame=banmen[0];
                                                }else{
                                                    if(banmen[1]==1 && banmen[4]==1 && banmen[7]===0){
                                                        banmen[7]=2;
                                                        koma7.frame=banmen[7];
                                                    }else{
                                                        if(banmen[1]==1 && banmen[7]==1 && banmen[4]===0){
                                                            banmen[4]=2;
                                                            koma4.frame=banmen[4];
                                                        }else{
                                                            if(banmen[4]==1 && banmen[7]==1 && banmen[1]===0){
                                                                banmen[1]=2;
                                                                koma1.frame=banmen[1];
                                                            }else{
                                                                if(banmen[2]==1 && banmen[5]==1 && banmen[8]===0){
                                                                    banmen[8]=2;
                                                                    koma8.frame=banmen[8];
                                                                }else{
                                                                    if(banmen[2]==1 && banmen[8]==1 && banmen[5]===0){
                                                                        banmen[5]=2;
                                                                        koma5.frame=banmen[5];
                                                                    }else{
                                                                        if(banmen[5]==1 && banmen[8]==1 && banmen[2]===0){
                                                                            banmen[2]=2;
                                                                            koma2.frame=banmen[2];
                                                                        }else{
                                                                            if(banmen[0]==1 && banmen[8]==1 && banmen[4]===0){
                                                                                banmen[4]=2;
                                                                                koma4.frame=banmen[4];
                                                                            }else{
                                                                                if(banmen[0]==1 && banmen[4]==1 && banmen[8]===0){
                                                                                    banmen[8]=2;
                                                                                    koma8.frame=banmen[8];
                                                                                }else{
                                                                                    if(banmen[4]==1 && banmen[8]==1 && banmen[0]===0){
                                                                                        banmen[0]=2;
                                                                                        koma0.frame=banmen[0];
                                                                                    }else{
                                                                                        if(banmen[6]==1 && banmen[2]==1 && banmen[4]===0){
                                                                                            banmen[4]=2;
                                                                                            koma4.frame=banmen[4];
                                                                                        }else{
                                                                                            if(banmen[4]==1 && banmen[2]==1 && banmen[6]===0){
                                                                                                banmen[6]=2;
                                                                                                koma6.frame=banmen[6];
                                                                                            }else{
                                                                                                if(banmen[6]==1 && banmen[4]==1 && banmen[2]===0){
                                                                                                    banmen[2]=2;
                                                                                                    koma2.frame=banmen[2];
                                                                                                }else{
                                                                                                    if(banmen[0]===0){
                                                                                                        banmen[0]=2;
                                                                                                        koma0.frame=banmen[0];
                                                                                                    }else{
                                                                                                        if(banmen[1]===0){
                                                                                                            banmen[1]=2;
                                                                                                            koma1.frame=banmen[1];
                                                                                                        }else{
                                                                                                            if(banmen[4]===0){
                                                                                                                banmen[4]=2;
                                                                                                                koma4.frame=banmen[4];
                                                                                                            }else{
                                                                                                                if(banmen[7]===0){
                                                                                                                    banmen[7]=2;
                                                                                                                    koma7.frame=banmen[7];
                                                                                                                }else{
                                                                                                                    if(banmen[5]===0){
                                                                                                                        banmen[5]=2;
                                                                                                                        koma5.frame=banmen[5];
                                                                                                                    }else{
                                                                                                                        if(banmen[6]===0){
                                                                                                                            banmen[6]=2;
                                                                                                                            koma6.frame=banmen[6];
                                                                                                                        }else{
                                                                                                                            if(banmen[3]===0){
                                                                                                                                banmen[3]=2;
                                                                                                                                koma3.frame=banmen[3];
                                                                                                                            }else{
                                                                                                                                if(banmen[8]===0){
                                                                                                                                    banmen[8]=2;
                                                                                                                                    koma8.frame=banmen[8];
                                                                                                                                }else{
                                                                                                                                    if(banmen[2]===0){
                                                                                                                                        banmen[2]=2;
                                                                                                                                        koma2.frame=banmen[2];
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
//テキスト関数
function resultext(text){
    var label=new Label();
    label.text=text;
    label.x=90;
    label.y=255;
    label.color="rgb(0,0,0)";
    label.font="32px serif";
    game.rootScene.addChild(label);
}
window.onload = function(){
    game = new Game(320, 320);
    //ロード画面
    var loadScene = new Scene();    
	game.loadingScene = loadScene;

	game.preload('loadscene.png');
	loadScene.addEventListener('progress', function(e) {
        var progress = e.loaded / e.total;
        progress *= 100;
        progress = Math.round(progress);
        
		var loadImg = new Sprite(320,320);
		loadImg.image = game.assets['loadscene.png'];
		loadScene.addChild(loadImg);
        
        var label = new Label();
        label.moveTo(50,60);
		label.text = progress;
		label.color = 'black';
        label.font = "180px Meyrio";
		loadScene.addChild(label);
	});
	loadScene.addEventListener('load', function(e) {
		var core = enchant.Core.instance;
		core.removeScene(core.loadingScene);
		core.dispatchEvent(e);
	});
    
    //読み込む画像の指定
    game.preload("title-back.png","san.png","moku.png","nara.png","be.png"
    ,"easy.png","normal.png","hard.png","sanmoku.png","easyok.png",
    "normalok.png","hardok.png","yes.png","no.png","madebyshioleap.png"
    ,"loadscene.png","ox.png","youwin.png","youlose.png","hikiwake.png"
    ,"anatasente.png","anatateban.png","cputeban.png","kangae.png",
    "nokori.png","jikangire.png","result.png");
    //ゲームの前処理完了
    game.onload = function(){
        //背景の生成
        var titleback = new Sprite(320, 320);
        titleback.image = game.assets["title-back.png"];
        game.rootScene.addChild(titleback);
        //タイトル字
        var title1 = new Sprite(70, 70);
        title1.image = game.assets["san.png"];
        game.rootScene.addChild(title1);
        var title2 = new Sprite(70, 70);
        title2.image = game.assets["moku.png"];
        game.rootScene.addChild(title2);
        var title3 = new Sprite(70, 70);
        title3.image = game.assets["nara.png"];
        game.rootScene.addChild(title3);
        var title4 = new Sprite(70, 70);
        title4.image = game.assets["be.png"];
        game.rootScene.addChild(title4);
        title1.x=20;
        title1.y=-70;
        title2.x=90;
        title2.y=-70;
        title3.x=160;
        title3.y=-70;
        title4.x=230;
        title4.y=-70;
        title1.tl.moveTo(20,125,10);
        title2.tl.delay(5).moveTo(90,125,10);
        title3.tl.delay(10).moveTo(160,125,10);
        title4.tl.delay(15).moveTo(230,125,10);
        //難易度ボタン
        var nanido1 = new Sprite(220, 80);
        nanido1.image = game.assets["easy.png"];
        game.rootScene.addChild(nanido1);
        var nanido2 = new Sprite(220, 80);
        nanido2.image = game.assets["normal.png"];
        game.rootScene.addChild(nanido2);
        var nanido3 = new Sprite(220, 80);
        nanido3.image = game.assets["hard.png"];
        game.rootScene.addChild(nanido3);
        nanido1.x=320;
        nanido1.y=20;
        nanido2.x=320;
        nanido2.y=120;
        nanido3.x=320;
        nanido3.y=220;
        //結果
        var youwin = new Sprite(320, 50);
        youwin.image = game.assets["youwin.png"];
        youwin.x=320;
        var youlose = new Sprite(344, 45);
        youlose.image = game.assets["youlose.png"];
        youlose.x=320;
        var hikiwake = new Sprite(320, 50);
        hikiwake.image = game.assets["hikiwake.png"];
        hikiwake.x=320;
        //文字たち
        var anatasente = new Sprite(320, 50);
        anatasente.image = game.assets["anatasente.png"];
        anatasente.x=320;
        anatasente.y=0;
        var anatateban = new Sprite(320, 50);
        anatateban.image = game.assets["anatateban.png"];
        anatateban.x=320;
        anatateban.y=0;
        var cputeban = new Sprite(320, 50);
        cputeban.image = game.assets["cputeban.png"];
        cputeban.x=320;
        cputeban.y=0;
        var jikangire = new Sprite(320, 50);
        jikangire.image = game.assets["jikangire.png"];
        jikangire.x=320;
        jikangire.y=0;
        //考え中
        var kangae = new Sprite(270, 270);
        kangae.image = game.assets["kangae.png"];
        kangae.x=25;
        kangae.y=50;
        //残り時間バー
        var nokori = new Sprite(20, 265);
        nokori.image = game.assets["nokori.png"];
        nokori.x=297.5;
        nokori.y=55;
        //結果
        var result = new Sprite(270, 270);
        result.image = game.assets["result.png"];
        result.x=25;
        result.y=50;
        //game.rootsceneの画面更新時の処理
        game.rootScene.onenterframe = function(){
            if(title4.y>=124){
                title1.tl.delay(15).moveTo(20,20,10);
                title2.tl.delay(15).moveTo(20,90,10);
                title3.tl.delay(15).moveTo(20,160,10);
                title4.tl.delay(15).moveTo(20,230,10);
                nanido1.tl.delay(30).moveTo(100,20,10);
                nanido2.tl.delay(45).moveTo(100,120,10);
                nanido3.tl.delay(60).moveTo(100,220,10);
            }
            //勝敗判定
            if(banmen[0]==1 && banmen[1]==1 && banmen[2]==1
            || banmen[3]==1 && banmen[4]==1 && banmen[5]==1
            || banmen[6]==1 && banmen[7]==1 && banmen[8]==1
            || banmen[0]==1 && banmen[3]==1 && banmen[6]==1
            || banmen[1]==1 && banmen[4]==1 && banmen[7]==1
            || banmen[2]==1 && banmen[5]==1 && banmen[8]==1
            || banmen[0]==1 && banmen[4]==1 && banmen[8]==1
            || banmen[6]==1 && banmen[4]==1 && banmen[2]==1){
                youwin.tl.moveTo(10,0,10);
                game.rootScene.removeChild(anatasente);
                game.rootScene.removeChild(anatateban);
                game.rootScene.removeChild(cputeban);
                game.rootScene.removeChild(nokori);
                banmen[0]=3;
                banmen[1]=3;
                banmen[2]=3;
                banmen[3]=3;
                banmen[4]=3;
                banmen[5]=3;
                banmen[6]=3;
                banmen[7]=3;
                banmen[8]=3;
                game.rootScene.addChild(result);
                result.tl.delay(40).moveTo(25,50,10);
            }
            if(banmen[0]==2 && banmen[1]==2 && banmen[2]==2
            || banmen[3]==2 && banmen[4]==2 && banmen[5]==2
            || banmen[6]==2 && banmen[7]==2 && banmen[8]==2
            || banmen[0]==2 && banmen[3]==2 && banmen[6]==2
            || banmen[1]==2 && banmen[4]==2 && banmen[7]==2
            || banmen[2]==2 && banmen[5]==2 && banmen[8]==2
            || banmen[0]==2 && banmen[4]==2 && banmen[8]==2
            || banmen[6]==2 && banmen[4]==2 && banmen[2]==2){
                youlose.tl.moveTo(-10,0,10);
                game.rootScene.removeChild(anatasente);
                game.rootScene.removeChild(anatateban);
                game.rootScene.removeChild(cputeban);
                game.rootScene.removeChild(nokori);
                banmen[0]=3;
                banmen[1]=3;
                banmen[2]=3;
                banmen[3]=3;
                banmen[4]=3;
                banmen[5]=3;
                banmen[6]=3;
                banmen[7]=3;
                banmen[8]=3;
                game.rootScene.addChild(result);
                result.tl.delay(40).moveTo(25,50,10);
            }
            if((((banmen[0]==1)||(banmen[0]==2))&&((banmen[1]==1)||(banmen[1]==2))&&
                ((banmen[2]==1)||(banmen[2]==2))&&((banmen[3]==1)||(banmen[3]==2))&&
                ((banmen[4]==1)||(banmen[4]==2))&&((banmen[5]==1)||(banmen[5]==2))&&
                ((banmen[6]==1)||(banmen[6]==2))&&((banmen[7]==1)||(banmen[7]==2))&&
                ((banmen[8]==1)||(banmen[8]==2)))&& !(
                    banmen[0]==2 && banmen[1]==2 && banmen[2]==2
                    || banmen[3]==2 && banmen[4]==2 && banmen[5]==2
                    || banmen[6]==2 && banmen[7]==2 && banmen[8]==2
                    || banmen[0]==2 && banmen[3]==2 && banmen[6]==2
                    || banmen[1]==2 && banmen[4]==2 && banmen[7]==2
                    || banmen[2]==2 && banmen[5]==2 && banmen[8]==2
                    || banmen[0]==2 && banmen[4]==2 && banmen[8]==2
                    || banmen[6]==2 && banmen[4]==2 && banmen[2]==2)
                    && !(
                        banmen[0]==1 && banmen[1]==1 && banmen[2]==1
                        || banmen[3]==1 && banmen[4]==1 && banmen[5]==1
                        || banmen[6]==1 && banmen[7]==1 && banmen[8]==1
                        || banmen[0]==1 && banmen[3]==1 && banmen[6]==1
                        || banmen[1]==1 && banmen[4]==1 && banmen[7]==1
                        || banmen[2]==1 && banmen[5]==1 && banmen[8]==1
                        || banmen[0]==1 && banmen[4]==1 && banmen[8]==1
                        || banmen[6]==1 && banmen[4]==1 && banmen[2]==1)){
                hikiwake.tl.moveTo(0,0,10);
                game.rootScene.removeChild(anatasente);
                game.rootScene.removeChild(anatateban);
                game.rootScene.removeChild(cputeban);
                game.rootScene.removeChild(nokori);
                banmen[0]=3;
                banmen[1]=3;
                banmen[2]=3;
                banmen[3]=3;
                banmen[4]=3;
                banmen[5]=3;
                banmen[6]=3;
                banmen[7]=3;
                banmen[8]=3;
                game.rootScene.addChild(result);
                result.tl.delay(40).moveTo(25,50,10);
            }
            if(nokori.y>=319){
                jikangire.tl.moveTo(-10,0,10);
                game.rootScene.removeChild(anatasente);
                game.rootScene.removeChild(anatateban);
                game.rootScene.removeChild(cputeban);
                game.rootScene.removeChild(nokori);
                banmen[0]=3;
                banmen[1]=3;
                banmen[2]=3;
                banmen[3]=3;
                banmen[4]=3;
                banmen[5]=3;
                banmen[6]=3;
                banmen[7]=3;
                banmen[8]=3;
                game.rootScene.addChild(result);
                result.tl.delay(40).then(resultext("ばかだよ"));
            }
           
        } ;
        //難易度ボタンが押されたら..
        var sanmoku = new Sprite(320, 320);
        sanmoku.image=game.assets["sanmoku.png"];
        var yes1  = new Sprite(60,25);
        yes1.image=game.assets["yes.png"];
        yes1.x=90;
        yes1.y=195;
        var yes2  = new Sprite(60,25);
        yes2.image=game.assets["yes.png"];
        yes2.x=90;
        yes2.y=195;
        var yes3  = new Sprite(60,25);
        yes3.image=game.assets["yes.png"];
        yes3.x=90;
        yes3.y=195;
        var no  = new Sprite(60,25);
        no.image=game.assets["no.png"];
        no.x=170;
        no.y=195;
        var easyok=new Sprite(320, 320);
        easyok.image=game.assets["easyok.png"];
        var normalok=new Sprite(320, 320);
        normalok.image=game.assets["normalok.png"];
        var hardok=new Sprite(320, 320);
        hardok.image=game.assets["hardok.png"];
        
        //コマのいろいろ
        koma0.image=game.assets["ox.png"];
        koma0.x=25;
        koma0.y=50;
        koma0.frame=banmen[0];
        koma1.image=game.assets["ox.png"];
        koma1.x=117.5;
        koma1.y=50;
        koma1.frame=banmen[1];
        koma2.image=game.assets["ox.png"];
        koma2.x=210;
        koma2.y=50;
        koma2.frame=banmen[2];
        koma3.image=game.assets["ox.png"];
        koma3.x=25;
        koma3.y=142.5;
        koma3.frame=banmen[3];
        koma4.image=game.assets["ox.png"];
        koma4.x=117.5;
        koma4.y=142.5;
        koma4.frame=banmen[4];
        koma5.image=game.assets["ox.png"];
        koma5.x=210;
        koma5.y=142.5;
        koma5.frame=banmen[5];
        koma6.image=game.assets["ox.png"];
        koma6.x=25;
        koma6.y=235;
        koma6.frame=banmen[6];
        koma7.image=game.assets["ox.png"];
        koma7.x=117.5;
        koma7.y=235;
        koma7.frame=banmen[7];
        koma8.image=game.assets["ox.png"];
        koma8.x=210;
        koma8.y=235;
        koma8.frame=banmen[8];
        //コマが押されたら
        koma0.ontouchend=function(){
            if(banmen[0]===0){
                banmen[0]=1;
                this.frame=banmen[0];
                game.rootScene.addChild(kangae);
                anatasente.tl.moveTo(-320,0,10);
                anatateban.tl.moveTo(320,0,0).
                delay(40).
                moveTo(0,0,10);
                cputeban.tl.moveTo(0,0,10).
                delay(20).
                then(function(){cpu()}).
                moveTo(-320,0,10).
                moveTo(320,0,0).
                then(function(){game.rootScene.removeChild(kangae);});
                
            }
        };
        koma1.ontouchend=function(){
            if(banmen[1]===0){
                banmen[1]=1;
                this.frame=banmen[1];
                game.rootScene.addChild(kangae);
                anatasente.tl.moveTo(-320,0,10);
                anatateban.tl.moveTo(320,0,0).
                delay(40).
                moveTo(0,0,10);
                cputeban.tl.moveTo(0,0,10).
                delay(20).
                then(function(){cpu()}).
                moveTo(-320,0,10).
                moveTo(320,0,0).
                then(function(){game.rootScene.removeChild(kangae);});
            }
        };
        koma2.ontouchend=function(){
            if(banmen[2]===0){
                banmen[2]=1;
                this.frame=banmen[2];
                game.rootScene.addChild(kangae);
                anatasente.tl.moveTo(-320,0,10);
                anatateban.tl.moveTo(320,0,0).
                delay(40).
                moveTo(0,0,10);
                cputeban.tl.moveTo(0,0,10).
                delay(20).
                then(function(){cpu()}).
                moveTo(-320,0,10).
                moveTo(320,0,0).
                then(function(){game.rootScene.removeChild(kangae);});
            }
        };
        koma3.ontouchend=function(){
            if(banmen[3]===0){
                banmen[3]=1;
                this.frame=banmen[3];
                game.rootScene.addChild(kangae);
                anatasente.tl.moveTo(-320,0,10);
                anatateban.tl.moveTo(320,0,0).
                delay(40).
                moveTo(0,0,10);
                cputeban.tl.moveTo(0,0,10).
                delay(20).
                then(function(){cpu()}).
                moveTo(-320,0,10).
                moveTo(320,0,0).
                then(function(){game.rootScene.removeChild(kangae);});
            }
        };
        koma4.ontouchend=function(){
            if(banmen[4]===0){
                banmen[4]=1;
                this.frame=banmen[4];
                game.rootScene.addChild(kangae);
                anatasente.tl.moveTo(-320,0,10);
                anatateban.tl.moveTo(320,0,0).
                delay(40).
                moveTo(0,0,10);
                cputeban.tl.moveTo(0,0,10).
                delay(20).
                then(function(){cpu()}).
                moveTo(-320,0,10).
                moveTo(320,0,0).
                then(function(){game.rootScene.removeChild(kangae);});
            }
        };
        koma5.ontouchend=function(){
            if(banmen[5]===0){
                banmen[5]=1;
                this.frame=banmen[5];
                game.rootScene.addChild(kangae);
                anatasente.tl.moveTo(-320,0,10);
                anatateban.tl.moveTo(320,0,0).
                delay(40).
                moveTo(0,0,10);
                cputeban.tl.moveTo(0,0,10).
                delay(20).
                then(function(){cpu()}).
                moveTo(-320,0,10).
                moveTo(320,0,0).
                then(function(){game.rootScene.removeChild(kangae);});
            }
        };
        koma6.ontouchend=function(){
            if(banmen[6]===0){
                banmen[6]=1;
                this.frame=banmen[6];
                game.rootScene.addChild(kangae);
                anatasente.tl.moveTo(-320,0,10);
                anatateban.tl.moveTo(320,0,0).
                delay(40).
                moveTo(0,0,10);
                cputeban.tl.moveTo(0,0,10).
                delay(20).
                then(function(){cpu()}).
                moveTo(-320,0,10).
                moveTo(320,0,0).
                then(function(){game.rootScene.removeChild(kangae);});
            }
        };
        koma7.ontouchend=function(){
            if(banmen[7]===0){
                banmen[7]=1;
                this.frame=banmen[7];
                game.rootScene.addChild(kangae);
                anatasente.tl.moveTo(-320,0,10);
                anatateban.tl.moveTo(320,0,0).
                delay(40).
                moveTo(0,0,10);
                cputeban.tl.moveTo(0,0,10).
                delay(20).
                then(function(){cpu()}).
                moveTo(-320,0,10).
                moveTo(320,0,0).
                then(function(){game.rootScene.removeChild(kangae);});
            }
        };
        koma8.ontouchend=function(){
            if(banmen[8]===0){
                banmen[8]=1;
                this.frame=banmen[8];
                game.rootScene.addChild(kangae);
                anatasente.tl.moveTo(-320,0,10);
                anatateban.tl.moveTo(320,0,0).
                delay(40).
                moveTo(0,0,10);
                cputeban.tl.moveTo(0,0,10).
                delay(20).
                then(function(){cpu()}).
                moveTo(-320,0,10).
                moveTo(320,0,0).
                then(function(){game.rootScene.removeChild(kangae);});
            }
        };
        
        yes1.ontouchend=function(){
            game.rootScene.removeChild(this);
            game.rootScene.removeChild(no);
            game.rootScene.removeChild(easyok);
            game.rootScene.removeChild(normalok);
            game.rootScene.removeChild(hardok);
            game.rootScene.addChild(anatasente);
            game.rootScene.addChild(anatateban);
            game.rootScene.addChild(cputeban);
            anatasente.tl.moveTo(0,0,10);
            anatateban.tl.moveTo(320,0,0);
            cputeban.tl.moveTo(-320,0,0);
            game.rootScene.addChild(nokori);
            nokori.tl.moveTo(297.5,320,700);
        };
        yes2.ontouchend=function(){
            game.rootScene.removeChild(this);
            game.rootScene.removeChild(no);
            game.rootScene.removeChild(easyok);
            game.rootScene.removeChild(normalok);
            game.rootScene.removeChild(hardok);
            game.rootScene.addChild(anatasente);
            game.rootScene.addChild(anatateban);
            game.rootScene.addChild(cputeban);
            anatasente.tl.moveTo(0,0,10);
            anatateban.tl.moveTo(320,0,0);
            cputeban.tl.moveTo(-320,0,0);
            game.rootScene.addChild(nokori);
            nokori.tl.moveTo(297.5,320,600);
        };
        yes3.ontouchend=function(){
            game.rootScene.removeChild(this);
            game.rootScene.removeChild(no);
            game.rootScene.removeChild(easyok);
            game.rootScene.removeChild(normalok);
            game.rootScene.removeChild(hardok);
            game.rootScene.addChild(anatasente);
            game.rootScene.addChild(anatateban);
            game.rootScene.addChild(cputeban);
            anatasente.tl.moveTo(0,0,10);
            anatateban.tl.moveTo(320,0,0);
            cputeban.tl.moveTo(-320,0,0);
            game.rootScene.addChild(nokori);
            nokori.tl.moveTo(297.5,320,500);
        };
        no.ontouchend=function(){
            game.rootScene.removeChild(sanmoku);
            game.rootScene.removeChild(this);
            game.rootScene.removeChild(yes1);
            game.rootScene.removeChild(yes2);
            game.rootScene.removeChild(yes3);
            game.rootScene.removeChild(easyok);
            game.rootScene.removeChild(normalok);
            game.rootScene.removeChild(hardok);
            game.rootScene.removeChild(koma0);
            game.rootScene.removeChild(koma1);
            game.rootScene.removeChild(koma2);
            game.rootScene.removeChild(koma3);
            game.rootScene.removeChild(koma4);
            game.rootScene.removeChild(koma5);
            game.rootScene.removeChild(koma6);
            game.rootScene.removeChild(koma7);
            game.rootScene.removeChild(koma8);
        };
        
        nanido1.ontouchend = function() {
            game.rootScene.addChild(sanmoku);
            game.rootScene.addChild(koma0);
            game.rootScene.addChild(koma1);
            game.rootScene.addChild(koma2);
            game.rootScene.addChild(koma3);
            game.rootScene.addChild(koma4);
            game.rootScene.addChild(koma5);
            game.rootScene.addChild(koma6);
            game.rootScene.addChild(koma7);
            game.rootScene.addChild(koma8);
            game.rootScene.addChild(easyok);
            game.rootScene.addChild(yes1);
            game.rootScene.addChild(no);
            game.rootScene.addChild(youwin);
            game.rootScene.addChild(youlose);
            game.rootScene.addChild(hikiwake);
            game.rootScene.addChild(jikangire);
        };
        nanido2.ontouchend = function() {
            game.rootScene.addChild(sanmoku);
            game.rootScene.addChild(koma0);
            game.rootScene.addChild(koma1);
            game.rootScene.addChild(koma2);
            game.rootScene.addChild(koma3);
            game.rootScene.addChild(koma4);
            game.rootScene.addChild(koma5);
            game.rootScene.addChild(koma6);
            game.rootScene.addChild(koma7);
            game.rootScene.addChild(koma8);
            game.rootScene.addChild(normalok);
            game.rootScene.addChild(yes2);
            game.rootScene.addChild(no);
            game.rootScene.addChild(youwin);
            game.rootScene.addChild(youlose);
            game.rootScene.addChild(hikiwake);
            game.rootScene.addChild(jikangire);
        };
        nanido3.ontouchend = function() {
            game.rootScene.addChild(sanmoku);
            game.rootScene.addChild(koma0);
            game.rootScene.addChild(koma1);
            game.rootScene.addChild(koma2);
            game.rootScene.addChild(koma3);
            game.rootScene.addChild(koma4);
            game.rootScene.addChild(koma5);
            game.rootScene.addChild(koma6);
            game.rootScene.addChild(koma7);
            game.rootScene.addChild(koma8);
            game.rootScene.addChild(hardok);
            game.rootScene.addChild(yes3);
            game.rootScene.addChild(no);
            game.rootScene.addChild(youwin);
            game.rootScene.addChild(youlose);
            game.rootScene.addChild(hikiwake);
            game.rootScene.addChild(jikangire);
        };
    };
    game.start();
};