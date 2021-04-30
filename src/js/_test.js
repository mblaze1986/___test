let button = document.querySelector('.pentagon__inner')
let text = document.querySelector('.pentagon__text')

button.onclick = function () {
  button.classList.toggle('active')
  text.classList.toggle('active')
}




// accordion with closing another tab ---------------------------------------------------


$('.accordion__tab').click(function () {
  $(this).toggleClass('accordion__tab--is-active').next().slideToggle(500);
  $('.accordion__tab').not(this).removeClass('accordion__tab--is-active').next().slideUp(500);
});




// tabs -------------------------------------------------------------------------------------

// horizontal

$('.tabs').each(function () {
  let tabswitch = $(this);
  tabswitch.find('.tabs__item').not(':eq(1)').hide();
  tabswitch.find('.tabs__btn').click(function () {
    tabswitch.find('.tabs__btn').removeClass('tabs__btn--is-active').eq($(this).index()).addClass('tabs__btn--is-active');
    tabswitch.find('.tabs__item').hide().eq($(this).index()).slideDown(500)
  }).eq(1).addClass('tabs__btn--is-active');
});



// vertical

$('.vertical-tabs').each(function () {
  let tabswitch = $(this);
  tabswitch.find('.vertical-tabs__item').not(':eq(2)').hide();
  tabswitch.find('.vertical-tabs__btn').click(function () {
    tabswitch.find('.vertical-tabs__btn').removeClass('vertical-tabs__btn--is-active').eq($(this).index()).addClass('vertical-tabs__btn--is-active');
    tabswitch.find('.vertical-tabs__item').hide(500).eq($(this).index()).show(500)
  }).eq(2).addClass('vertical-tabs__btn--is-active');
});