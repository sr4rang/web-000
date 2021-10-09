//준비구문
$(document).ready(function(){

$('h1').click(function(){
$(this).css('color','red')
});

$('.text').mouseenter(function(){
    $(this).css('color','green');
});

$('.text').mouseleave(function(){
    $(this).css('color','blue');
});

});