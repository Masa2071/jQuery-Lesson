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

$(function(){
  $('.box2').slideDown();
  $('.box2').css({
    'width': '200px',
    'height': '100px',
    'background-color': '#0000FF'
  }).slideUp();
});