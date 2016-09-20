// Timer Bar - Version 1.0

var loadedcolor='#0000cd';       //■ ﾊﾞｰ色
var unloadedcolor='';            //■ 背景色
var bordercolor='#ccccff';       //■ 罫線色
var barheight=15;                //■ ﾊﾞｰ高さ
var barwidth=300;                //■ ﾊﾞｰ幅
var waitTime=30;                 //■ ｶｳﾝﾄ時間（秒）
var waitMsg1='「ただいまお手続きをしています。しばらくお待ちください。」';
var waitMsg2='このお手続きにはもう少し時間がかかります。\nこのままお待ちください。';

var action=function()
{
  alert(waitMsg2);　　//■　ﾒｯｾｰｼﾞ
}

//*****************************************************//
//**********  DO NOT EDIT BEYOND THIS POINT  **********//
//*****************************************************//

var ns4=(document.layers)?true:false;
var ie4=(document.all)?true:false;
var blocksize=(barwidth-2)/waitTime/10;
var loaded=0;
var PBouter;
var PBdone;
var PBbckgnd;
var Pid=0;
var txt='';

if(ns4){
  txt+='<span id="myText" style="position:absolute; visibility:hidden; color:red;">' + waitMsg1 + '</span><br>';
  txt+='<table border=0 cellpadding=0 cellspacing=0><tr><td>';
  txt+='<ilayer name="PBouter" visibility="hide" height="'+barheight+'" width="'+barwidth+'">';
  txt+='<layer width="'+barwidth+'" height="'+barheight+'" bgcolor="'+bordercolor+'" top="0" left="0"></layer>';
  txt+='<layer width="'+(barwidth-2)+'" height="'+(barheight-2)+'" bgcolor="'+unloadedcolor+'" top="1" left="1"></layer>';
  txt+='<layer name="PBdone" width="'+(barwidth-2)+'" height="'+(barheight-2)+'" bgcolor="'+loadedcolor+'" top="1" left="1"></layer>';
  txt+='</ilayer>';
  txt+='</td></tr></table>';
}else{
  txt+='<span id="myText" style="position:absolute; visibility:hidden; color:red;">' + waitMsg1 + '</span><br>';
  txt+='<div id="PBouter" style="position:relative; visibility:hidden; background-color:'+bordercolor+'; width:'+barwidth+'px; height:'+barheight+'px;">';
  txt+='<div style="position:absolute; top:1px; left:1px; width:'+(barwidth-2)+'px; height:'+(barheight-2)+'px; background-color:'+unloadedcolor+'; font-size:1px;"></div>';
  txt+='<div id="PBdone" style="position:absolute; top:1px; left:1px; width:0px; height:'+(barheight-2)+'px; background-color:'+loadedcolor+'; font-size:1px;"></div>';
  txt+='</div>';
}
document.write(txt);

function incrCount(){
  loaded++;
  if(loaded<0)loaded=0;
  if(loaded>=waitTime*10){
    clearInterval(Pid);
    loaded=waitTime*10;
    setTimeout('hidebar()',100);
  }
  resizeEl(PBdone, 0, blocksize*loaded, barheight-2, 0);
}

function hidebar(){
  clearInterval(Pid);
  action();
}

//THIS FUNCTION BY MIKE HALL OF BRAINJAR.COM
function findlayer(name,doc){
  var i,layer;
  for(i=0;i<doc.layers.length;i++){
    layer=doc.layers[i];
    if(layer.name==name)return layer;
    if(layer.document.layers.length>0)
    if((layer=findlayer(name,layer.document))!=null)
    return layer;
  }
  return null;
}

function progressBarInit(){
  PBouter=(ns4)?findlayer('PBouter',document):(ie4)?document.all['PBouter']:document.getElementById('PBouter');
  PBdone=(ns4)?PBouter.document.layers['PBdone']:(ie4)?document.all['PBdone']:document.getElementById('PBdone');
  resizeEl(PBdone,0,0,barheight-2,0);
  if(ns4)PBouter.visibility="show";
  else PBouter.style.visibility="visible";
  Pid=setInterval('incrCount()',95);
}

function resizeEl(id,t,r,b,l){
  if(ns4){
    id.clip.left=l;
    id.clip.top=t;
    id.clip.right=r;
    id.clip.bottom=b;
  }else id.style.width=r+'px';
}

function execProgressBar(){
  myText.style.visibility="visible";
  progressBarInit();
  jump();
  return true;
}

function execProgressBar1(){
  myText.style.visibility="visible";
  progressBarInit();
  jump1();
  return true;
}
