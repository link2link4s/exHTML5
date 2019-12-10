var menu = $('.menu');
var items = $('.menu-item');
var btns = $('.btn-menu');
var anchors = $('.sub-menu a');

// 토글버튼 클릭했을때 하위 메뉴를 보이도록 설정할 것
btns.click(function(e){
  e.preventDefault();
  items.removeClass('menu-act');
  $(this).parent().addClass('menu-act');
});

anchors.addClass('icon-dot-cirled');