const number=[
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
]
const numberLength=number.length;
let $button=document.getElementsByTagName('button');
let $text=document.getElementsByTagName('input');
let $audio=document.getElementsByTagName('audio');
const textLength=$text.length;
//ボタンを最初の状態に戻す
const init_number=()=>{
  for(i=0;i<numberLength-1;i++)$button[i].textContent=number[i];
  $button[9].textContent='×';
}
//ゲームボード初期化
const init=()=>{
    init_number();
    count=0;
    game_count=0;
    EAT=0;
    BYTE=0;
    x=[];
    x_ans=[];
    pro1=[];
    pro2="";
    print_process=document.getElementById('p');
    for(i=0;i<4;i++)
    {
      if(i===0)x[i]=Math.floor(Math.random()*(9-1+1))+1;
      else x[i]=Math.floor(Math.random()*(9+1));
      if(i===1&&x[i]===x[i-1])i--;  
      if(i===2&&(x[i]===x[i-1]||x[i]===x[i-2]))i-=2;
      if(i==3&&(x[i]==x[i-1]||x[i]==x[i-2]||x[i]==x[i-3]))i-=3;
    }

}
init();


//ボタンが押されたときのボタンの表示変更
const get_text=(e)=>{
  e.target.textContent="×";
  e.target.disabled=true;
  e.target.title='2回同じ数字は使えません';
}
//ナンバーボタンが押されたときの処理
for(i=0;i<numberLength;i++)
{
  $button[i].addEventListener('click',(e)=>{
    get_text(e);
  });
}
//0のボタンが押せるときの処理
const zero_button_canpush=()=>{
  $button[9].disabled=false;
  $button[9].title='0';
  $button[9].textContent='0';
}

//セッションスタート時の処理
const start=()=>{
  const keyName = 'visited';
  const keyValue = true;
  if (!sessionStorage.getItem(keyName)) 
  {
    //sessionStorageにキーと値を追加
    sessionStorage.setItem(keyName, keyValue);
    introJs().start();
  }       
}
//テキスト、回答を代入する処理
const get_intext=(cnt,num1)=>{
  $text[cnt].value=num1;
  x_ans[cnt]=num1;
}
//全ての数字ボタンを押せなくする
const button_disabled=()=>{
  for(i=0;i<numberLength;i++)$button[i].disabled=true;
}
const button_send_answer=()=>{
  $button[11].disabled=false;
  $button[11].title='回答送信';
}
//数字が得られたとき
const get_num=(num)=>{
  console.log(num);
  let aud = $audio[0];
  aud.currentTime = 0;
  aud.play();
  if(count===0)
  {
    get_intext(count,num);
    get_intext(count,num);
    zero_button_canpush();
    count++;
  }
  else if(count==1||count==2)
  {
    get_intext(count,num);
    count++;
  }
  else if(count==3)
  {
    get_intext(count,num)        
    button_disabled();
    button_send_answer();
  } 
}

//回答送信時
const get_send=()=>{
  $audio[1].play();
  game_count++;
  for(i=0;i<4;i++)
  {
    if(x_ans[i]===x[i])EAT++;
    else if((i==0&&(x_ans[i]==x[i+1]||x_ans[i]==x[i+2]||x_ans[i]==x[i+3]))||(i==1&&(x_ans[i]==x[i-1]||x_ans[i]==x[i+1]||x_ans[i]==x[i+2]))||(i==2&&(x_ans[i]==x[i-1]||x_ans[i]==x[i-2]||x_ans[i]==x[i+1]))||(i==3&&(x_ans[i]==x[i-1]||x_ans[i]==x[i-2]||x_ans[i]==x[i-3])))BYTE++;
  }
  if(EAT===4)
  {
    $audio[2].play();
    $button[11].disabled=true;
    // 紅丸を描画
    let drawPoint = document.getElementById("draw");
    let draw = drawPoint.insertAdjacentHTML('beforebegin', '<div id="canv"><canvas class="fadeUpAnime" id="canvas" width="230" height="230"></canvas></div>');
    let element = document.getElementById( "canvas" ) ;
    let context = element.getContext( "2d" ) ;
    context.beginPath () ;
    context.arc( 115, 115, 75, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
    context.strokeStyle = 'red';
    context.lineWidth = 30;
    context.stroke();
    setTimeout('replay_OK()',2000);
  }
  else
  {          
    pro1=game_count+'move:　'+x_ans[0]+x_ans[1]+x_ans[2]+x_ans[3]+'　'+EAT+'EAT,'+BYTE+'BYTE'+'<br>';
    pro2=pro1+pro2;
    print_process.innerHTML=pro2;
    EAT=0;
    BYTE=0;
    get_C();
  }
  if(EAT!==4&&game_count===15)
  {
    $audio[3].play();
    $button[11].disabled=true;
    // バツを描画
    let drawPoint = document.getElementById("draw");
    let draw = drawPoint.insertAdjacentHTML('beforebegin', '<div id="canv"><canvas class="fadeUpAnime" id="canvas" width="230" height="230"></canvas></div>');
    let element = document.getElementById( "canvas" ) ;
    let context = element.getContext( "2d" ) ;
    context.beginPath () ;
    context.font = "bold 150px Anton sans-serif";
    context.fillStyle = 'blue';
    context.lineWidth = 50;
    context.fillText("✕", 52, 160);
    setTimeout('replay_NO()',2000);
  }
}
//リロード時
const reset=()=>{
  window.location.reload();
}
//クリア時
const replay_OK=()=>{
  window.alert("おめでとうございます.\n答えは"+x+"です.\n"+game_count+"手でクリアしました.\nアラートを閉じると新しいゲームが始まります.");
  window.location.reload();
}
//ゲームオーバー時
const replay_NO=()=>{
  window.alert("残念でした.\n次頑張ってください.\n答えは"+x+"でした.\nアラートを閉じると新しいゲームが始まります.");
  window.location.reload();
}

//入力数字をリセットする
const text_reset=()=>{
  for(i=0;i<textLength;i++)$text[i].value="";
}

//リセットボタンが押されたときの数字ボタンについて
const button_reset_title_and_disabled=()=>{
  for(i=0;i<numberLength-1;i++)
  {
    $button[i].disabled=false;
    $button[i].title=i+1;
  }
  $button[9].disabled=true;
  $button[9].title='0は1桁目に入力できない';
}

//リセットボタンが押されたときの送信ボタンについて
const send_reset=()=>{
  $button[11].disabled=true;
  $button[11].title='3桁の数字を入力してください.';
}

//リセットボタンが押されたときの処理
const get_C=()=>{
  text_reset();
  button_reset_title_and_disabled();
  init_number();
  count=0;
}