// // jQueryの基本形
// $(document).ready(function (){
//   $('body').html('<h1>Hello jQuery!!</h1>');
// })
// // 上の基本形の省略型
// $(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });
// // $('セレクタ').メソット('パラメータ')

// $(function(){
//   $('.box1').css({
//     'background-color': '#FF00FF',
//     'height': '100px'
//   });
// });

// 非表示の要素をスライドダウンで表示させる
// $(function(){
//   $('.box1').slideDown();
// });
// スライドアップで表示から非表示に
// $(function(){
//   $('.box1').slideUp();
// });

// showで非表示を表示している
// $(function(){
//   $('.box1').show();
// });

// hideで表示要素を非表示に
// $(function(){
//   $('.box1').hide();
// });
// マウスカーソルがbox1の上に乗った時
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({
//       'background-color': '#0000FF'
//     });
//   });
//   // マウスカーソルが外れた時
//   $('.box1').mouseout(function(){
//     $('.box1').css({
//       'background-color': '#FF0000'
//     });
//   });
// });

$(function(){
  $('.box1').mouseover(function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});
// addClassでクラスを追加しそのクラスのcssを適用している
// rimoveClassでクラスを解除

// マウスクリックイベント
// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// });
// .click()ではクリックでした段階でイベントが終了する

$(function(){
  $('.box2').on('click', function(){
    $('.box2').addClass('box2-ext');
  });
  $('.box2').mouseout(function(){
    $('.box2').removeClass('box2-ext');
  });
});